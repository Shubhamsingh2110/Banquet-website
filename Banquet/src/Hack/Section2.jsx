import { useState } from "react"

export default function AuthComponent() {
  const [isRegister, setIsRegister] = useState(true)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    party: "",
    slogan: "",
  })

  const [walletAddress, setWalletAddress] = useState("")
  const [logo, setLogo] = useState(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [isDragOver, setIsDragOver] = useState(false)

  const connectWallet = async () => {
    if (typeof window !== "undefined" && window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
        setWalletAddress(accounts[0])
        setMessage("✅ Wallet connected: " + accounts[0])
      } catch (err) {
        setMessage("❌ Wallet connection failed: " + err.message)
      }
    } else {
      setMessage("❌ MetaMask not detected. Please install MetaMask.")
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setLogo(e.target.files[0])
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragOver(false)

    const files = e.dataTransfer.files
    if (files && files[0]) {
      const file = files[0]
      if (file.type.startsWith("image/")) {
        setLogo(file)
      }
    }
  }

  const handleBrowseClick = () => {
    document.getElementById("file-input").click()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (isRegister) {
      if (!formData.name || !formData.party || !formData.slogan || !walletAddress || !logo) {
        setMessage("❌ Please fill all fields, connect wallet, and upload a logo")
        return
      }

      setLoading(true)
      setMessage("")

      try {
        const formDataToSend = new FormData()
        formDataToSend.append("name", formData.name)
        formDataToSend.append("party", formData.party)
        formDataToSend.append("slogan", formData.slogan)
        formDataToSend.append("candidateWalletAddress", walletAddress)
        formDataToSend.append("logo", logo)

        const response = await fetch("http://localhost:5000/api/candidate/register", {
          method: "POST",
          body: formDataToSend,
          credentials: "include",
        })

        const data = await response.json()

        if (response.ok) {
          setMessage("✅ " + data.message)
          setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            party: "",
            slogan: "",
          })
          setWalletAddress("")
          setLogo(null)
        } else {
          setMessage("❌ " + (data.message || "Registration failed"))
        }
      } catch (error) {
        setMessage("❌ Error: " + error.message)
      } finally {
        setLoading(false)
      }
    } else {
      console.log("Login submitted:", formData)
    }
  }

  const toggleForm = () => {
    setIsRegister(!isRegister)
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      party: "",
      slogan: "",
    })
    setWalletAddress("")
    setLogo(null)
    setMessage("")
  }

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-white/10 items-center justify-center p-12">
        <div className="max-w-full">
        <img src="https://i.pinimg.com/1200x/4e/d5/46/4ed546c7223daba8b671761abb9d1bc2.jpg" alt="" className="bg-black h-[500px] w-full translate-x-14 "/>
        </div>
      </div>

      {/* Right side - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden">
            {message && (
              <div
                className={`mb-4 p-3 rounded-lg text-sm text-center ${
                  message.includes("✅")
                    ? "bg-green-100 text-green-700 border border-green-200"
                    : "bg-red-100 text-red-700 border border-red-200"
                }`}
              >
                {message}
              </div>
            )}

            {/* Sliding content wrapper */}
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{
                transform: isRegister ? "translateX(0)" : "translateX(-100%)",
                width: "200%",
                display: "flex",
              }}
            >
              {/* Register Form */}
              <div className="w-1/2 pr-8">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-montserrat font-semibold text-black mb-8">Candidate Registration</h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 bg-gray-100 hover:border border-black/20 rounded-full text-gray-900 text-base outline-none transition-all duration-75 "
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="party"
                      placeholder="Party Affiliation"
                      value={formData.party}
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 bg-gray-100 hover:border border-black/20 rounded-full text-gray-900 text-base outline-none transition-all duration-200 focus:bg-white"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="slogan"
                      placeholder="Campaign Slogan"
                      value={formData.slogan}
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 bg-gray-100 hover:border border-black/20 rounded-full text-gray-900 text-base outline-none transition-all duration-200 focus:bg-white "
                      required
                    />
                  </div>

                  <div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={walletAddress}
                        readOnly
                        placeholder="Connect your wallet"
                        className="flex-1 h-12 px-4 bg-gray-100 hover:border border-black/20 rounded-full text-gray-900 text-base outline-none"
                        required
                      />
                      <button
                        type="button"
                        onClick={connectWallet}
                        className="bg-black text-white border-none font-montserrat rounded-full px-4 py-2 text-sm font-medium cursor-pointer hover:bg-gray-800 transition-colors"
                      >
                        {walletAddress ? "Connected" : "Connect"}
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Your Ethereum wallet address for blockchain registration
                    </p>
                  </div>

                  <div>
                    <div
                      className={`relative border-2 border-dashed rounded-3xl p-8 text-center transition-colors cursor-pointer ${
                        isDragOver ? "border-green-500 bg-green-50" : "border-gray-300 bg-gray-50 hover:border-gray-400"
                      }`}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={handleBrowseClick}
                    >
                      <input
                        id="file-input"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                        required
                      />

                      {/* Green mountain icon */}
                      <div className="mb-4 flex justify-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 2L22 20H2L12 2Z" fill="#22c55e" stroke="#22c55e" strokeWidth="1" />
                          </svg>
                        </div>
                      </div>

                      <div className="text-gray-600">
                        <p className="text-base font-medium mb-1">
                          {logo ? logo.name : "Drop your image here, or browse"}
                        </p>
                        <p className="text-sm text-gray-500">Supports: PNG, JPG, JPEG, WEBP</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-black text-white border-none rounded-full font-montserrat px-8 py-3 font-normal text-base cursor-pointer hover:bg-gray-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? "Registering..." : "REGISTER"}
                    </button>
                  </div>

                  <div className="flex items-start space-x-2 pt-4">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-1 w-4 h-4 text-slate-800 bg-gray-100 border-gray-300 rounded-full"
                    />
                    <label htmlFor="terms" className="text-xs text-gray-600 leading-relaxed">
                      By registering your details, you agree with our{" "}
                      <span className="text-slate-800 underline cursor-pointer">Terms & Conditions</span> and{" "}
                      <span className="text-slate-800 underline cursor-pointer">Privacy and Cookie Policy</span>.
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
