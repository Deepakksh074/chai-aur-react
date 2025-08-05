import React, { useState, useEffect } from "react";

const ForgotPasswordFlow = () => {
  const [currentStep, setCurrentStep] = useState('forgot-password'); // 'forgot-password' or 'verify-otp'
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setCurrentStep('verify-otp');
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join('');
    if (otpValue.length === 6) {
      alert(`OTP ${otpValue} verified! Redirecting to reset password...`);
      // Here you would typically redirect to reset password page
    }
  };

  const handleBackToForgotPassword = () => {
    setCurrentStep('forgot-password');
    setOtp(['', '', '', '', '', '']);
  };

  if (currentStep === 'verify-otp') {
    return (
      <div style={{ 
        margin: "0",
        padding: "20px",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#f8f9fa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif"
      }}>
        <div style={{
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)",
          width: "100%",
          maxWidth: isMobile ? "100%" : "675px",
          minWidth: "320px",
          height: "auto",
          minHeight: isMobile ? "auto" : "321px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          overflow: "hidden"
        }}>
          
          {/* Left image section */}
          <div style={{
            width: isMobile ? "100%" : "50%",
            height: isMobile ? "200px" : "321px",
            backgroundColor: "#f8f9fa",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: "0"
          }}>
            <img 
              src="https://via.placeholder.com/280x200/4F46E5/FFFFFF?text=OTP+Verification"
              alt="OTP verification illustration" 
              style={{
                width: isMobile ? "200px" : "280px",
                height: isMobile ? "150px" : "200px",
                objectFit: "contain"
              }}
            />
          </div>
          
          {/* Right form section */}
          <div style={{
            width: isMobile ? "100%" : "50%",
            height: "auto",
            padding: isMobile ? "25px 20px" : "25px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            boxSizing: "border-box",
            flexShrink: "0"
          }}>
            <h2 style={{
              fontSize: isMobile ? "20px" : "20px",
              fontWeight: "600",
              color: "#2d3748",
              margin: "0 0 8px 0",
              textAlign: isMobile ? "center" : "left"
            }}>
              Verify OTP
            </h2>
            
            <p style={{
              color: "#718096",
              fontSize: isMobile ? "14px" : "13px",
              margin: "0 0 20px 0",
              lineHeight: "1.4",
              textAlign: isMobile ? "center" : "left"
            }}>
              Enter the 6-digit code sent to <strong>{email}</strong>
            </p>

            <form onSubmit={handleOtpSubmit}>
              <div style={{
                display: "flex",
                gap: "8px",
                marginBottom: "20px",
                justifyContent: "center"
              }}>
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    style={{
                      width: "40px",
                      height: "40px",
                      border: "1px solid #e2e8f0",
                      borderRadius: "4px",
                      fontSize: "18px",
                      fontWeight: "600",
                      textAlign: "center",
                      outline: "none",
                      boxSizing: "border-box",
                      backgroundColor: "#fff"
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#3182ce";
                      e.target.style.boxShadow = "0 0 0 1px #3182ce";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e2e8f0";
                      e.target.style.boxShadow = "none";
                    }}
                    maxLength={1}
                  />
                ))}
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  backgroundColor: "#1dd1a1",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  margin: "0 0 10px 0",
                  transition: "background-color 0.2s ease"
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#16a085";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#1dd1a1";
                }}
              >
                Verify OTP
              </button>

              <button
                type="button"
                onClick={handleBackToForgotPassword}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  backgroundColor: "transparent",
                  color: "#718096",
                  border: "1px solid #e2e8f0",
                  borderRadius: "4px",
                  fontSize: "14px",
                  fontWeight: "500",
                  cursor: "pointer",
                  margin: "0",
                  transition: "all 0.2s ease"
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#f7fafc";
                  e.target.style.borderColor = "#cbd5e0";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.borderColor = "#e2e8f0";
                }}
              >
                Back to Email
              </button>
            </form>

            <p style={{
              color: "#718096",
              fontSize: "12px",
              margin: "15px 0 0 0",
              textAlign: "center"
            }}>
              Didn't receive the code? <span style={{color: "#3182ce", cursor: "pointer", textDecoration: "underline"}}>Resend</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      margin: "0",
      padding: "20px",
      width: "100vw",
      height: "100vh",
      backgroundColor: "#f8f9fa",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)",
        width: "100%",
        maxWidth: isMobile ? "100%" : "675px",
        minWidth: "320px",
        height: "auto",
        minHeight: isMobile ? "auto" : "321px",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        overflow: "hidden"
      }}>
        
        {/* Left image section */}
        <div style={{
          width: isMobile ? "100%" : "50%",
          height: isMobile ? "200px" : "321px",
          backgroundColor: "#f8f9fa",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexShrink: "0"
        }}>
          <img 
            src="https://via.placeholder.com/280x200/4F46E5/FFFFFF?text=Medical+Team"
            alt="Medical illustration" 
            style={{
              width: isMobile ? "200px" : "280px",
              height: isMobile ? "150px" : "200px",
              objectFit: "contain"
            }}
          />
        </div>
        
        {/* Right form section */}
        <div style={{
          width: isMobile ? "100%" : "50%",
          height: "auto",
          padding: isMobile ? "25px 20px" : "25px",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          boxSizing: "border-box",
          flexShrink: "0"
        }}>
          <h2 style={{
            fontSize: isMobile ? "20px" : "20px",
            fontWeight: "600",
            color: "#2d3748",
            margin: "0 0 8px 0",
            textAlign: isMobile ? "center" : "left"
          }}>
            Forgot Password
          </h2>
          
          <p style={{
            color: "#718096",
            fontSize: isMobile ? "14px" : "13px",
            margin: "0 0 20px 0",
            lineHeight: "1.4",
            textAlign: isMobile ? "center" : "left"
          }}>
            Enter your email and we will send you a link to reset your password.
          </p>

          <form onSubmit={handleForgotPasswordSubmit}>
            <div style={{marginBottom: "15px"}}>
              <label style={{
                display: "block",
                fontSize: "12px",
                fontWeight: "500",
                color: "#374151",
                margin: "0 0 6px 0"
              }}>
                Email Address <span style={{color: "#e53e3e"}}>*</span>
              </label>
              
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  border: "1px solid #e2e8f0",
                  borderRadius: "4px",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                  backgroundColor: "#fff",
                  margin: "0"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#3182ce";
                  e.target.style.boxShadow = "0 0 0 1px #3182ce";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e2e8f0";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px 16px",
                backgroundColor: "#1dd1a1",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                margin: "0",
                transition: "background-color 0.2s ease"
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#16a085";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#1dd1a1";
              }}
            >
              Send Reset Link
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordFlow;