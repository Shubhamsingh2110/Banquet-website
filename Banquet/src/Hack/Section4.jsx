import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

export default function LoginRegisterPortal() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [showFace, setShowFace] = useState(false)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [faceEmbedding, setFaceEmbedding] = useState(null)

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone_number: "",
    voter_id: "",
    userWalletAddress: "",
  })

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("Please install MetaMask wallet")
        return
      }

      // Using dynamic import to avoid SSR issues
      //  const { ethers } = await import("ethers")
      const provider = new ethers.BrowserProvider(window.ethereum)
      await provider.send("eth_requestAccounts", [])
      const signer = await provider.getSigner()
      const address = await signer.getAddress()

      setForm((prev) => ({ ...prev, userWalletAddress: address }))
    } catch (error) {
      console.error("Wallet connection failed:", error)
      alert("Wallet connection failed")
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleEmbeddingData = (embeddingData) => {
    setFaceEmbedding(embeddingData)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.userWalletAddress) {
      alert("Please connect your MetaMask wallet first")
      return
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match")
      return
    }

    if (!faceEmbedding) {
      alert("Please capture your face before submitting")
      return
    }

    setLoading(true)
    setResult(null)

    try {
      // Note: Replace with your actual API endpoint
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          face_embedding: faceEmbedding,
        }),
      })

      const data = await response.json()
      setResult(data)

      if (data.ok) {
        // Handle successful registration
        setTimeout(() => {
          // Navigate based on your app's routing logic
          window.location.href = "/dashboard"
        }, 1000)
      }
    } catch (error) {
      setResult({
        ok: false,
        message: error.message || "Registration failed",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-7xl bg-white rounded-2xl overflow-hidden">
        <div className="flex h-auto min-h-[700px]">
          {/* Welcome Section */}
          <div className="w-1/2 bg-white flex items-center justify-center p-12">
            <img src="https://i.pinimg.com/1200x/ac/9c/81/ac9c81e8f02498c42e37c3f480e659b9.jpg" alt="" />
          </div>

          {/* Registration Section */}
          <div className="w-1/2 bg-white/20 border rounded-3xl flex items-center justify-center p-12">
            <div className="w-full max-w-md">
              <h1 className="text-5xl font-light font-montserrat text-gray-800 mb-2">Register</h1>
              <p className="text-gray-600 font-montserrat text-sm mb-8">Create your blockchain voting account</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <button
                    type="button"
                    onClick={connectWallet}
                    className={`w-full py-3 rounded-3xl font-medium transition-colors duration-200 ${
                      form.userWalletAddress
                        ? "bg-black hover:bg-black text-white"
                        : "bg-black hover:bg-black text-white"
                    }`}
                  >
                    {form.userWalletAddress ? "✓ Wallet Connected" : "Connect MetaMask Wallet"}
                  </button>
                </div>

                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 focus:border-[#8B5CF6] focus:ring-0 focus:outline-none px-3 py-2 rounded-full"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 focus:border-[#8B5CF6] focus:ring-0 focus:outline-none px-3 py-2 rounded-full"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone_number"
                    placeholder="Phone Number"
                    value={form.phone_number}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 focus:border-[#8B5CF6] focus:ring-0 focus:outline-none px-3 py-2 rounded-full"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="voter_id"
                    placeholder="Voter ID"
                    value={form.voter_id}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 focus:border-[#8B5CF6] focus:ring-0 focus:outline-none px-3 py-2 rounded-full"
                  />
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 focus:border-[#8B5CF6] focus:ring-0 focus:outline-none px-3 py-2 pr-10 rounded-full"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>

                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 focus:border-[#8B5CF6] focus:ring-0 focus:outline-none px-3 py-2 pr-10 rounded-full"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>

                {form.userWalletAddress && (
                  <div>
                    <input
                      type="text"
                      placeholder="Wallet Address"
                      value={form.userWalletAddress}
                      readOnly
                      className="w-full border border-gray-300 bg-gray-50 px-3 py-2 rounded-md text-sm"
                    />
                  </div>
                )}

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setShowFace(true)}
                    className="w-full bg-black hover:bg-black text-white py-3 rounded-full font-medium transition-colors duration-200 mb-4"
                  >
                    {faceEmbedding ? "✓ Face Captured" : "Capture Face for Registration"}
                  </button>

                  {showFace && (
                    <div className="border border-gray-300 rounded-3xl p-4 mb-4">
                      <p className="text-sm text-gray-600 mb-2">Face capture component would be rendered here</p>
                      <button
                        type="button"
                        onClick={() => {
                          // Simulate face capture completion
                          setFaceEmbedding("simulated_face_data")
                          setShowFace(false)
                        }}
                        className="bg-black/50 text-white px-4 py-2 rounded-full text-sm"
                      >
                        Simulate Face Capture
                      </button>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black/70 disabled:bg-gray-400 text-white py-3 rounded-full font-medium transition-colors duration-200"
                >
                  {loading ? "Registering..." : "Register"}
                </button>

                {result && (
                  <div
                    className={`text-center text-sm p-3 rounded ${result.ok ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                  >
                    {result.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
