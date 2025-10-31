package com.jobportal.utility;

public class Data {
	public static String getMessageBody(String otp) {
		return			"<!doctype html>\n" +
						"<html lang=\"en\">\n" +
						"<head>\n" +
						"  <meta charset=\"utf-8\">\n" +
						"  <title>Reset Password via OTP</title>\n" +
						"  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n" +
						"  <style>\n" +
						"    body{margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;background-color:#f2f4f6;color:#333333;}\n" +
						"    .email-wrapper{width:100%;background:#f2f4f6;padding:20px 0;}\n" +
						"    .email-content{max-width:600px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,0.05);}\n" +
						"    .email-header{padding:20px;text-align:center;background:linear-gradient(90deg,#FEDB37,#333333);color:#fff;}\n" +
						"    .brand{font-size:20px;font-weight:700;}\n" +
						"    .email-body{padding:28px;}\n" +
						"    h1{font-size:20px;margin:0 0 16px 0;color:#333333;}\n" +
						"    p{margin:0 0 12px 0;line-height:1.5;color:#4b4b4b;}\n" +
						"    .otp-box{display:inline-block;font-size:28px;letter-spacing:6px;padding:14px 18px;border-radius:8px;background:#fff8e1;border:1px dashed #FEDB37;margin:12px 0 18px 0;font-weight:700;color:#333333;}\n" +
						"    .btn{display:inline-block;text-decoration:none;padding:12px 20px;border-radius:8px;background:#333333;color:yellow;font-weight:600;}\n" +
						"    .small{font-size:13px;color:#666666;}\n" +
						"    .footer{padding:18px;text-align:center;font-size:12px;color:#999999;background:#f9f9f9;}\n" +
						"  </style>\n" +
						"</head>\n" +
						"<body>\n" +
						"  <table class=\"email-wrapper\" width=\"100%\">\n" +
						"    <tr>\n" +
						"      <td align=\"center\">\n" +
						"        <table class=\"email-content\" width=\"100%\">\n" +
						"          <tr>\n" +
						"            <td class=\"email-header\"><div class=\"brand\">Jobious</div></td>\n" +
						"          </tr>\n" +
						"          <tr>\n" +
						"            <td class=\"email-body\">\n" +
						"              <h1>One Time Passcode</h1>\n" +
						"              <p>Use the code below to complete your sign-in. This code is valid for <strong>10 minutes</strong>.</p>\n" +
						"              <div style=\"text-align:center; margin:18px 0;\">\n" +
						"                <div class=\"otp-box\">" + otp + "</div>\n" +
						"              </div>\n" +
						"              <p style=\"text-align:center;\">\n" +
						"                <a href=\"https://example.com/verify\" class=\"btn\">Verify Now</a>\n" +
						"              </p>\n" +
						"              <p class=\"small\" style=\"margin-top:18px;\">\n" +
						"                If you didn't request this code, you can safely ignore this email.\n" +
						"              </p>\n" +
						"              <hr style=\"border:none;border-top:1px solid #eef2f7;margin:20px 0;\">\n" +
						"              <p class=\"small\">\n" +
						"                Need help? Visit our <a href=\"https://example.com/support\" style=\"color:#333333;text-decoration:none;\">support center</a>.\n" +
						"              </p>\n" +
						"            </td>\n" +
						"          </tr>\n" +
						"          <tr>\n" +
						"            <td class=\"footer\">\n" +
						"              <div>Jobious • 12 Tambe, Pune</div>\n" +
						"              <div style=\"margin-top:6px;\">©Jobious. All rights reserved.</div>\n" +
						"            </td>\n" +
						"          </tr>\n" +
						"        </table>\n" +
						"      </td>\n" +
						"    </tr>\n" +
						"  </table>\n" +
						"</body>\n" +
						"</html>";
	}
}
