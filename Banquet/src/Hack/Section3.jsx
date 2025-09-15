import { useState } from "react"
import { Loader2, User, Lock, Smartphone, Camera } from "lucide-react"


// Face Capture Component - consolidated inline
const FaceCaptureMulti = ({ frameCount, interval, onCaptureComplete }) => {
  return (
    <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center">
      <Camera className="mx-auto mb-2 h-8 w-8 text-gray-400" />
      <p className="text-sm text-gray-500">Face capture simulation</p>
      <button
        onClick={() => onCaptureComplete([1, 2, 3, 4, 5])}
        className="mt-2 px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Simulate Face Capture
      </button>
    </div>
  )
}

// Mock axios for demo
const axios = {
  post: async (url, data) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock successful response
    return {
      data: {
        message: "Login successful",
        user: {
          voter_id: data.voter_id,
          userWalletAddress: data.voter_id === "admin" ? ADMIN_WALLET : "0xuser123",
        },
      },
    }
  },
}

// Main Voting Login Portal Component - all functionality in one file
export default function VotingLoginPage() {
  const [method, setMethod] = useState("password")
  const [form, setForm] = useState({
    voter_id: "",
    password: "",
    otp: "",
  })
  const [faceEmbedding, setFaceEmbedding] = useState(null)
  const [showFace, setShowFace] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    try {
      let res

      if (method === "password") {
        res = await axios.post("/auth/login/password", {
          voter_id: form.voter_id,
          password: form.password,
        })
      } else if (method === "face") {
        if (!faceEmbedding) {
          setMessage("❌ Please capture your face before logging in.")
          setLoading(false)
          return
        }
        res = await axios.post("/auth/login/face", {
          voter_id: form.voter_id,
          face_embedding: faceEmbedding,
        })
      } else if (method === "otp-verify") {
        res = await axios.post("/auth/login/otp/verify", {
          voter_id: form.voter_id,
          otp: form.otp,
        })
      }

      const data = res?.data
      setMessage("✅ " + data.message)

      localStorage.setItem("currentUser", JSON.stringify(data.user))

      const isAdmin = data.user.userWalletAddress?.toLowerCase() === ADMIN_WALLET?.toLowerCase()

      setTimeout(() => {
        if (isAdmin) {
          console.log("Redirecting to admin dashboard")
        } else {
          console.log("Redirecting to voting dashboard")
        }
      }, 1500)
    } catch (error) {
      setMessage("❌ " + (error.response?.data?.message || error.message))
    } finally {
      setLoading(false)
    }
  }

  const handleRequestOTP = async () => {
    try {
      setMessage("Sending OTP...")
      await axios.post("/auth/login/otp/request", {
        voter_id: form.voter_id,
      })
      setMessage("📲 OTP sent to your registered phone")
      setMethod("otp-verify")
    } catch (error) {
      setMessage("❌ " + (error.response?.data?.message || error.message))
    }
  }

  const handleFaceCaptured = (embedding) => {
    setFaceEmbedding(embedding)
    setShowFace(false)
    setMessage("✅ Face captured, ready to login")
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - SVG Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-white items-center justify-center p-12">
        <div className="max-w-full text-center">
            <img src="https://i.pinimg.com/1200x/0c/9b/89/0c9b89b62ba04b4b4740f4ce2da28b54.jpg" alt="" className="" />
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md bg-white rounded-3xl border border-black/10">
          <div className="p-6 text-center">
            <h2 className="text-5xl font-normal font-montserrat text-black mb-6">Voter Login</h2>
            <p className="text-sm text-black/60 font-montserrat mt-1">Choose your preferred authentication method</p>
          </div>
          <div className="p-6">
            <div className="w-full">
              <div className="grid w-full grid-cols-3 bg-gray-100 rounded-3xl p-2">
                <button
                  onClick={() => setMethod("password")}
                  className={`flex items-center justify-center gap-1 px-3 py-2 text-base font-normal rounded-full transition-colors ${
                    method === "password" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Lock className="h-4 w-4" />
                  Password
                </button>
                <button
                  onClick={() => setMethod("face")}
                  className={`flex items-center justify-center gap-1 px-3 py-2 text-base font-normal rounded-full transition-colors ${
                    method === "face" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Camera className="h-4 w-4" />
                  Face
                </button>
                <button
                  onClick={() => setMethod("otp")}
                  className={`flex items-center justify-center gap-1 px-3 py-2 text-base font-normal rounded-full transition-colors ${
                    method === "otp" || method === "otp-verify"
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Smartphone className="h-4 w-4" />
                  OTP
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                {/* Voter ID - Always shown */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Voter ID</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      name="voter_id"
                      placeholder="Enter your Voter ID"
                      value={form.voter_id}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-slate-500/30 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Password Tab Content */}
                {method === "password" && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium font-montserrat text-gray-700">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-slate-500/30 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Face Tab Content */}
                {method === "face" && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Face Recognition</label>
                    <button
                      type="button"
                      onClick={() => setShowFace(true)}
                      className={`w-full px-4 py-2 text-sm font-medium font-montserrat rounded-full border transition-colors ${
                        faceEmbedding
                          ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {faceEmbedding ? "Face Captured ✅" : "Capture Face"}
                    </button>
                    {showFace && (
                      <FaceCaptureMulti frameCount={5} interval={400} onCaptureComplete={handleFaceCaptured} />
                    )}
                  </div>
                )}

                {/* OTP Tab Content */}
                {method === "otp" && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium font-montserrat text-gray-700">One-Time Password</label>
                    <button
                      type="button"
                      onClick={handleRequestOTP}
                      className="w-full px-4 py-2 text-sm font-medium bg-white text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                    >
                      Request OTP
                    </button>
                  </div>
                )}

                {/* OTP Verify Tab Content */}
                {method === "otp-verify" && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium font-montserrat text-gray-700">Enter OTP</label>
                    <input
                      type="text"
                      name="otp"
                      placeholder="Enter 6-digit OTP"
                      value={form.otp}
                      onChange={handleChange}
                      maxLength={6}
                      className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-4 py-4 bg-black text-white font-montserrat font-medium rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Logging in...
                    </>
                  ) : (
                    "Login"
                  )}
                </button>
              </form>

              {message && (
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-full">
                  <p className="text-sm text-blue-800">{message}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
