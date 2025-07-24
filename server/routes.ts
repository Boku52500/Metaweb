import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import seoBot from "./routes/seo-bot.js";
import contact from "./routes/contact.js";

export async function registerRoutes(app: Express): Promise<Server> {
  // Subdomain handling - must come first before any other routes
  app.get('/', (req, res, next) => {
    const host = req.get('host') || '';
    console.log(`Root request from host: ${host}`);
    
    // Check if request is from online.metaweb.ge subdomain
    if (host.includes('online.metaweb.ge') || host.includes('online.')) {
      console.log(`Serving welcome page for subdomain: ${host}`);
      return res.send(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Welcome to Metaweb - Digital Excellence</title>
            <link rel="icon" type="image/png" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAMO0lEQVR4nO2df5RVdRnHP/fODBcGmBmGGYaBYWBgBhgYGGBg4g9ISIKVtFqWqVilaFqKQKaWpaBipaaplLZWq4xKJQ0LNUvNJLVSQkNJTSstKy1LLSstfc7zvO/cc++eOff+uPfee+48n3/mnPO+77y/z32/7/e8z/d5v++7kpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSklJS8+/RZWNvNvh9U84sMxgfNu86r0LsPH8Zm2q1DgTtGjNMuqWS9TFTM5Rg1u4aBwDO80PZmOJmFa8HwFr/K7ZotA4EXdbROgByeTp4SRi7bHe8HgBr/Y/YqNE6ELRjjCbH2Tx/Bfnvv8X4GWA9AR+zOaP1G7t8D17SdPBjOqGl5AV5d2Nb2iO+KLSO7FWxfuPOZKOK1mfsqnEA4F/QLzjHJnwPnhsYqJ9t6UbQz3x6nf2A9wQfozgjPj9uPQE/ojFa/70d/gfABr4EJyHc+i2HYNVDMHMu1NfD+gWQ/wz6Zcva+wJsYwM20dA6slfl+o1+0v++HL9n0Bv6RWvfgK3vA6EaRRBAbbsDf4LQAyDQ3wvUFJ3vRkA1AqhGANUIoBoB3AXcfPPN3HXXXXz4wx/msccea/XdE088wU033cRdd911n+Dqq6/mD3/4Aw8++CC9evXis5/9LDfddBPvvfdefKoRwF3AFVdcwZ///Gd+/OMftzGvx+dtt92G53mc/3wnAJCIIBIRRCKC1QngFVdcwUMPPZRI5Ve2AqpH8G9xF3DBBRfwve99j7vuuosf/vCHTT8fPXo0559/Pl//+tcJbAVUj8AHwQYmAKuA/sAe4HvAJcDlwE+BLwLXAguBN4ElQA1wGVABTABeAH4N3Au8DQwElgNnASPVGJcS4gOA/DQZAY0jb9OIW7YCqkfwo6Y5gO2j/ySwCXgCmAu8D9gJnAqcCpwO/Av4KNBotXfJHf4WcDowGugPPA2cAbwPeAvYAjwhPiGFgLF8m8jeZgfcZl8DF4OANzUBWKO6fKIJuAJ4F7AJ2A1sAI4D9gNnAucDBeBfwCLgZOAU4GZgDXBxoe9m4L3ArY7zyy5gAzAe2Aj8HvgFcAmwHpgGrAR+qT6H5QoB2Dfu2o6+u5xdUa7fCBBo7vRzWp/KhfM9WL4Cjhv2QZjX8LcwDwJdPQ82PWm6R/wOIIlCOo5//G1nq2uKnWjyLTjRhNH6BFhVG6OxTxhOwwHweA6o7C9g8FeQXwPqCy66HqzjfQ8r5SrYBJCNjYymS3Cfn1P5gk40YTTRhNE3N7ztHLN+A0E3Cah6Au8BoNaBrYBfD7BuKYTxhMsm5itwn59T+YJONGGYj/a7hLG9v7+NeGc0rV8Qzx4FiLNRZKOz68LGWLi7gMU5DjjQhGECTTRheFBIE4xnhKKqUhP7CtqVL8BT8aTTdPfPfg22s/9N8k3aPPrb98CpFdxWq/qN51X5gs5xpgkUUe9/2cQ7g3kN1l5lNvE8v9k4iCKKaCKfq9cZFOPpNAhGmzBK4JJxGHdNI8Y2n97J7yQGcU4D3EYA1QigGgFUIwBfV1998IMf8K9//SvvGhTlugpg7wFQjQCqEUA1AqhGANUIADS/1vvjH/8Yc+fO5Qtf+AJbtmxhxYoVzWv7Rx99NAsWLGD16tXMnz+fffv2cfXVV2Na+y+9fgOBAEBzAhBVANBcA2S/1JmxS3D99dcXK/1/T98B2An7mwMBnPz6jaoCgOYaIFsFmFcBLs9vBxgOBQJAjL8FaFT1BL7D1kzKfA8Qpm3I0Ppt6z+Ix9MZn3pGO/7TRBOGOclDbKIN03GhO+E8v1xfAXZTgPfgNwioGgH0CxaBvQKIpkzJfA8QmzZOdyqwuv6zfP+xg0wYJjdoUfvmNt5kQDEJI+2h4Hae357b7QcCqnoCF/Z9CdXbNd8D5PYQxdOhvf7zef6oHWfCMJ0FMzEGS4DhEGDS2hfAVLdh0v7pPL8938G1xz+oIqBZBRBHBfvOdCYAM/HYnSLyeYjk9ZsOww/cPo95BKiOwHO7S8n8VaI0/m2uTQ1+tV5zGKE6O2xQfweQGvnzJYDkCE7d+vNZ9F/r5vx3PY8dNzJA9QS5/Q0B7gEhBgHN3eiP/FehjEHXNQHY7sO9BNHF94K25zZnfnsmV6H6dJlFQPO4gBpEfE5A9QSeC9YAhGkNnLvAy9QH6KZJVVO7bLgUYBf3u8qD2Hg2h6TjsOlMCFHYqCqANz6gcgUC4gLNWx5nz1FaAmjCxv1dQ8MlgCh7gjjEW6f3/r4d6a7S7KNL3oAAqvMBnhPAdMKz5fN3VJ6tLyCtfQEMlwJMOy70EkC8wAU/+e8vdQ2aXWJ7/hMZADiW9BRnzrjfGdNBhG/sG3fNcG7fzHf5bHdhGfpIEYfzCqB6A6+7cE5AehGgPwcoJwF0U/0G2Q+A6g28hV/AcyrIEP6tGCbHlR6xbf2H8fhUY1YBqgJwO4x0ItOZZKKxXAo2jXx+WuHST1xDwwJq/+yt3zgnMoD6BXhFM8cEhAHNvbr5LLi7x3oG/5D7vMGl4v7xrKIFrKOxTzTp+6Sxbe+DfgRwu4fKdubqgb1tAZ7G6nRNADLBcxbgwlY3ogD5vP6j9nYBhZtdBOD7lnB3T+Cx3PG7nF8O8xFAO5r48WKc5EXaWYCfmgJcoGKKpJr3ULs7gAA6/tq6VCzOdmfDdnvP39F1+RlfbTrDbfKNJAV4ufNHZxGgKxVu5lclF3YlIc9B/+BfAJdGAb5JBujqKKvTVS3ZCSNwsB5fAXhLdHBBq6ZdrKw49W8/h1/Pvo5WgK4HGE6Xr5C6K+sJwEU5P4r1dCWANA97PAmAnz1AjD8HuD8n4YQB7P4B+95/dwE37QJyLX9U3QqWrQCu9mCluf7jjL99BWAHnDN5OaKCG1i2Akg7Vgfvgv9e5d+AiwQk7b2/rQBMO/o6tTMkgJJr4N4e2JX1dKGCO3Jwd+BI+1U7m/zrgO10Yr9AjF/L1OvfJrKgGzWc5/o96Txs5gJoGiGCYgogzVkCN2oAvCWSdWN90oMSPwDo6zei7tpvCu1owsjSsiBBr48KWrLKqpqKEz9Pm2sAsA9P1m9E3bbLEKOJfdPBLh5J2Xo8/R8U1CVQPH7hC6Bj+QLOfxrOBJCfHe29fxKjXpJ2Vs7/vgK4ePSPbSNRwJl7f5vIF7w2FZOAswCAW8OY6i1J+zO2LXgLwIc8gGsJGHfLNKkCTKOCfOzvKgH7fq98BcwRXBK2hJMKLqX7pAJwWf9FXVOhFfkJwOz5xXodCMCmMnvtIzeBHXm8O2oYl9+2bAXRDpOAqzLXLqX6bC1iUwfvIgAzFZzt+e3oKVEAHdL+QqA6DtglAlIBSRCN6y8+CqgOGJHZV0TdnJA0COjy+TNXAWQZUW7kc9qKOvV/rJ4dOUJlZSUrV650JLKyurqZbORbvXo18dqc4CBAJF7/7atgG/vvz50tAZK/bVd4dAA2uI8BZcVUZ9K9dK1nKwCJBPZzxF6+8qV1O18Aa4HdedGlKZIRp8aVc8qH6gySo3KsrOy3HxfgLgGnKgCbiHp2F5Pv/vnyO2+2Aqj2CJiJhOlZg2xuP0cD+J6PODTIpT6Afs0E/L8GJL4CsMU8N8YRjx6m+iKtr3aBPAcDZf0nXUE0gwC/l8sGw12JCNLMDWzBF/Cb9PqPnFbvj0//eU8N0vYUtPWJwY7N8lEZNVzIJECcJ/lR6YOkHUldCUBKAzfn8Quh+hQw4zc7Uj+QrQB+7O7zY9RwNhODNHdwBXf0vDJRwAbLryCfr3OzdJTaT7YCeDJQZLuKYf4IaycH7eVqhWXfBuxmFfnaDaRNOXJbT8b8d6jzJdZXE4r6Iio9PcTj/0rMWE5HSFRwfx5aSqokGfzE/3YrALANQ7RGALYLh7IOO7z/fZdC61CfTQANgwGgfQLOJ5a/bFyZKu3UcuBdRl3nIfVFKu4K4gS6Ds1mDwEUdnVJKcVyOH6kfJhI0Pf5kSQAiwwCgC6F9ry/nE8A7X7HJwQAfrQAwM08aNO0qPxjvgO5Q34CQCNBVKHdPVJKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSgqN/wOxDkKDTbsrLwAAAABJRU5ErkJggg==" />
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
            <style>
              :root {
                --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                --secondary-gradient: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
                --accent-gradient: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
                --glass-bg: rgba(255, 255, 255, 0.1);
                --glass-border: rgba(255, 255, 255, 0.2);
                --text-primary: #ffffff;
                --text-secondary: rgba(255, 255, 255, 0.85);
                --shadow-light: rgba(255, 255, 255, 0.1);
                --shadow-dark: rgba(0, 0, 0, 0.3);
              }

              * { 
                margin: 0; 
                padding: 0; 
                box-sizing: border-box; 
              }

              body { 
                font-family: 'Poppins', 'Inter', 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                min-height: 100vh;
                background: 
                  radial-gradient(ellipse at top, #667eea 0%, #764ba2 100%),
                  linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%);
                background-size: 100% 100%, 200% 200%;
                animation: gradientShift 15s ease infinite;
                position: relative;
                overflow-x: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
              }

              @keyframes gradientShift {
                0% { background-position: 0% 0%, 0% 50%; }
                50% { background-position: 0% 0%, 100% 50%; }
                100% { background-position: 0% 0%, 0% 50%; }
              }

              /* Multiple Layered Background Effects */
              body::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: 
                  radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.15) 0%, transparent 40%),
                  radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.2) 0%, transparent 60%),
                  radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.2) 0%, transparent 50%),
                  radial-gradient(circle at 70% 70%, rgba(168, 85, 247, 0.15) 0%, transparent 45%);
                animation: backgroundPulse 12s ease-in-out infinite alternate;
                z-index: 0;
              }

              body::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: 
                  conic-gradient(from 0deg at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 25%),
                  conic-gradient(from 180deg at 75% 75%, rgba(251, 191, 36, 0.1) 0%, transparent 25%);
                animation: backgroundRotate 20s linear infinite;
                z-index: 1;
              }

              @keyframes backgroundPulse {
                0% { opacity: 0.4; transform: scale(1) rotate(0deg); }
                50% { opacity: 0.7; transform: scale(1.1) rotate(2deg); }
                100% { opacity: 0.5; transform: scale(0.95) rotate(-1deg); }
              }

              @keyframes backgroundRotate {
                0% { transform: rotate(0deg) scale(1); }
                50% { transform: rotate(180deg) scale(1.05); }
                100% { transform: rotate(360deg) scale(1); }
              }

              /* Enhanced Floating Particles System */
              .particles {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 2;
              }

              .particle {
                position: absolute;
                border-radius: 50%;
                filter: blur(0.5px);
              }

              /* Large glowing particles */
              .particle:nth-child(1) { 
                left: 10%; top: 20%; width: 8px; height: 8px; 
                background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.1) 100%);
                animation: float1 8s ease-in-out infinite;
              }
              .particle:nth-child(2) { 
                left: 20%; top: 80%; width: 12px; height: 12px; 
                background: radial-gradient(circle, rgba(251, 191, 36, 0.7) 0%, rgba(251, 191, 36, 0.1) 100%);
                animation: float2 10s ease-in-out infinite;
              }
              .particle:nth-child(3) { 
                left: 60%; top: 10%; width: 6px; height: 6px; 
                background: radial-gradient(circle, rgba(6, 182, 212, 0.8) 0%, rgba(6, 182, 212, 0.1) 100%);
                animation: float3 7s ease-in-out infinite;
              }
              .particle:nth-child(4) { 
                left: 80%; top: 60%; width: 10px; height: 10px; 
                background: radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, rgba(168, 85, 247, 0.1) 100%);
                animation: float4 9s ease-in-out infinite;
              }
              .particle:nth-child(5) { 
                left: 70%; top: 30%; width: 4px; height: 4px; 
                background: radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.1) 100%);
                animation: float5 6s ease-in-out infinite;
              }
              .particle:nth-child(6) { 
                left: 30%; top: 70%; width: 14px; height: 14px; 
                background: radial-gradient(circle, rgba(251, 191, 36, 0.5) 0%, rgba(251, 191, 36, 0.05) 100%);
                animation: float6 11s ease-in-out infinite;
              }
              .particle:nth-child(7) { 
                left: 45%; top: 15%; width: 5px; height: 5px; 
                background: radial-gradient(circle, rgba(6, 182, 212, 0.7) 0%, rgba(6, 182, 212, 0.1) 100%);
                animation: float7 8.5s ease-in-out infinite;
              }
              .particle:nth-child(8) { 
                left: 85%; top: 25%; width: 7px; height: 7px; 
                background: radial-gradient(circle, rgba(168, 85, 247, 0.8) 0%, rgba(168, 85, 247, 0.1) 100%);
                animation: float8 9.5s ease-in-out infinite;
              }

              @keyframes float1 {
                0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); opacity: 0.6; }
                33% { transform: translateY(-25px) translateX(10px) rotate(120deg) scale(1.2); opacity: 1; }
                66% { transform: translateY(-10px) translateX(-15px) rotate(240deg) scale(0.8); opacity: 0.8; }
              }

              @keyframes float2 {
                0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); opacity: 0.5; }
                50% { transform: translateY(-35px) translateX(20px) rotate(180deg) scale(1.4); opacity: 0.9; }
              }

              @keyframes float3 {
                0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); opacity: 0.7; }
                25% { transform: translateY(-15px) translateX(-10px) rotate(90deg) scale(1.1); opacity: 1; }
                75% { transform: translateY(-30px) translateX(5px) rotate(270deg) scale(0.9); opacity: 0.6; }
              }

              @keyframes float4 {
                0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); opacity: 0.4; }
                40% { transform: translateY(-20px) translateX(-20px) rotate(144deg) scale(1.3); opacity: 0.8; }
                80% { transform: translateY(-40px) translateX(10px) rotate(288deg) scale(1.1); opacity: 0.7; }
              }

              @keyframes float5 {
                0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); opacity: 0.8; }
                50% { transform: translateY(-45px) translateX(-25px) rotate(180deg) scale(1.5); opacity: 1; }
              }

              @keyframes float6 {
                0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); opacity: 0.3; }
                33% { transform: translateY(-30px) translateX(15px) rotate(120deg) scale(0.7); opacity: 0.6; }
                66% { transform: translateY(-15px) translateX(-10px) rotate(240deg) scale(1.2); opacity: 0.5; }
              }

              @keyframes float7 {
                0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); opacity: 0.6; }
                50% { transform: translateY(-25px) translateX(30px) rotate(180deg) scale(1.3); opacity: 0.9; }
              }

              @keyframes float8 {
                0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); opacity: 0.5; }
                30% { transform: translateY(-20px) translateX(-15px) rotate(108deg) scale(1.1); opacity: 0.8; }
                70% { transform: translateY(-35px) translateX(5px) rotate(252deg) scale(0.9); opacity: 0.7; }
              }

              /* Main Container */
              .container {
                background: var(--glass-bg);
                backdrop-filter: blur(20px);
                border-radius: 32px;
                padding: 64px 48px;
                border: 2px solid var(--glass-border);
                box-shadow: 
                  0 32px 64px var(--shadow-dark),
                  inset 0 1px 0 var(--shadow-light);
                text-align: center;
                max-width: 700px;
                width: 100%;
                position: relative;
                z-index: 2;
                transform: translateY(0);
                animation: containerEntry 1s ease-out;
              }

              @keyframes containerEntry {
                0% { 
                  opacity: 0; 
                  transform: translateY(30px) scale(0.95); 
                }
                100% { 
                  opacity: 1; 
                  transform: translateY(0) scale(1); 
                }
              }

              /* Header with Logo Effect */
              .header {
                margin-bottom: 48px;
                position: relative;
              }

              .logo {
                width: 80px;
                height: 80px;
                background: var(--secondary-gradient);
                border-radius: 50%;
                margin: 0 auto 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 36px;
                font-weight: 900;
                color: #000;
                box-shadow: 0 16px 32px rgba(251, 191, 36, 0.3);
                animation: logoRotate 10s linear infinite;
                position: relative;
              }

              .logo::before {
                content: '';
                position: absolute;
                inset: -4px;
                background: var(--accent-gradient);
                border-radius: 50%;
                z-index: -1;
                animation: logoPulse 3s ease-in-out infinite;
              }

              @keyframes logoRotate {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }

              @keyframes logoPulse {
                0%, 100% { opacity: 0.5; transform: scale(1); }
                50% { opacity: 0.8; transform: scale(1.1); }
              }

              h1 {
                font-family: 'Orbitron', 'Space Grotesk', sans-serif;
                font-size: 4.8rem;
                font-weight: 900;
                background: linear-gradient(135deg, #ffffff 0%, #fbbf24 25%, #06b6d4 50%, #a855f7 75%, #ffffff 100%);
                background-size: 300% 300%;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                margin-bottom: 16px;
                letter-spacing: -0.03em;
                text-shadow: 
                  0 0 10px rgba(255, 255, 255, 0.3),
                  0 0 20px rgba(251, 191, 36, 0.2),
                  0 0 30px rgba(6, 182, 212, 0.1);
                animation: titleGlow 6s ease-in-out infinite, gradientMove 8s ease-in-out infinite;
                filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
              }

              @keyframes gradientMove {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
              }

              @keyframes titleGlow {
                0% { text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); }
                100% { text-shadow: 0 8px 16px rgba(255, 255, 255, 0.1); }
              }

              .subtitle {
                font-size: 1.5rem;
                color: var(--text-secondary);
                font-weight: 500;
                margin-bottom: 48px;
                letter-spacing: 0.01em;
              }

              /* Features Grid */
              .features {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 24px;
                margin-bottom: 48px;
              }

              .feature {
                background: rgba(255, 255, 255, 0.05);
                border-radius: 16px;
                padding: 24px;
                border: 1px solid rgba(255, 255, 255, 0.1);
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
              }

              .feature::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 2px;
                background: var(--accent-gradient);
                transform: scaleX(0);
                transition: transform 0.3s ease;
              }

              .feature:hover {
                transform: translateY(-4px);
                background: rgba(255, 255, 255, 0.1);
                box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
              }

              .feature:hover::before {
                transform: scaleX(1);
              }

              .feature-icon {
                font-size: 2rem;
                margin-bottom: 12px;
              }

              .feature-title {
                font-size: 1.1rem;
                font-weight: 600;
                color: var(--text-primary);
                margin-bottom: 8px;
              }

              .feature-desc {
                font-size: 0.9rem;
                color: var(--text-secondary);
                line-height: 1.5;
              }

              /* CTA Button */
              .button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                background: var(--secondary-gradient);
                color: #000;
                padding: 20px 48px;
                border-radius: 50px;
                font-weight: 700;
                font-size: 1.2rem;
                text-decoration: none;
                box-shadow: 
                  0 16px 32px rgba(251, 191, 36, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.2);
                transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                position: relative;
                overflow: hidden;
                letter-spacing: 0.02em;
              }

              .button::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                transition: left 0.5s;
              }

              .button:hover::before {
                left: 100%;
              }

              .button:hover {
                transform: translateY(-3px) scale(1.05);
                box-shadow: 
                  0 20px 40px rgba(251, 191, 36, 0.4),
                  inset 0 1px 0 rgba(255, 255, 255, 0.3);
                background: linear-gradient(135deg, #fcd34d 0%, #fbbf24 100%);
              }

              .button:active {
                transform: translateY(-1px) scale(1.02);
              }

              .emoji {
                margin-right: 12px;
                font-size: 1.4rem;
                animation: bounce 2s infinite;
              }

              @keyframes bounce {
                0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                40% { transform: translateY(-4px); }
                60% { transform: translateY(-2px); }
              }

              /* Responsive Design */
              @media (max-width: 768px) {
                .container { 
                  padding: 48px 32px; 
                  border-radius: 24px; 
                }
                h1 { 
                  font-size: 3rem; 
                }
                .subtitle { 
                  font-size: 1.2rem; 
                }
                .features {
                  grid-template-columns: 1fr;
                  gap: 16px;
                }
                .button { 
                  padding: 18px 36px; 
                  font-size: 1.1rem; 
                }
                .logo {
                  width: 64px;
                  height: 64px;
                  font-size: 28px;
                }
              }

              @media (max-width: 480px) {
                .container { 
                  padding: 32px 24px; 
                  margin: 16px;
                }
                h1 { 
                  font-size: 2.5rem; 
                }
                .subtitle { 
                  font-size: 1.1rem; 
                }
                .button { 
                  padding: 16px 32px; 
                  font-size: 1rem; 
                  width: 100%;
                }
              }
            </style>
          </head>
          <body>
            <div class="particles">
              <div class="particle"></div>
              <div class="particle"></div>
              <div class="particle"></div>
              <div class="particle"></div>
              <div class="particle"></div>
              <div class="particle"></div>
              <div class="particle"></div>
              <div class="particle"></div>
            </div>
            
            <div class="container">
              <div class="header">
                <div class="logo">M</div>
                <h1>Welcome to Metaweb</h1>
                <p class="subtitle">Your Gateway to Digital Excellence</p>
              </div>

              <div class="features">
                <div class="feature">
                  <div class="feature-icon">🚀</div>
                  <div class="feature-title">Modern Design</div>
                  <div class="feature-desc">Cutting-edge web solutions crafted with precision</div>
                </div>
                <div class="feature">
                  <div class="feature-icon">⚡</div>
                  <div class="feature-title">Lightning Fast</div>
                  <div class="feature-desc">Optimized performance for exceptional user experience</div>
                </div>
                <div class="feature">
                  <div class="feature-icon">🎯</div>
                  <div class="feature-title">Expert Support</div>
                  <div class="feature-desc">Professional Georgian web development team</div>
                </div>
              </div>

              <a href="https://metaweb.ge" class="button">
                <span class="emoji">🚀</span>
                Visit Metaweb
              </a>
            </div>
          </body>
        </html>
      `);
    }
    
    // Continue to next middleware (Vite) for normal requests
    next();
  });

  // Test route for subdomain functionality (accessible via main domain)
  app.get('/online-welcome', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Welcome to Metaweb</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
              font-family: 'ALK Sanet', 'Noto Sans Georgian', sans-serif;
              min-height: 100vh;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 20px;
            }
            .container {
              background: rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(10px);
              border-radius: 24px;
              padding: 48px;
              border: 1px solid rgba(255, 255, 255, 0.2);
              box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
              text-align: center;
              max-width: 600px;
              width: 100%;
            }
            h1 {
              font-size: 4rem;
              font-weight: bold;
              color: white;
              margin-bottom: 32px;
            }
            p {
              font-size: 1.25rem;
              color: rgba(255, 255, 255, 0.8);
              margin-bottom: 48px;
            }
            .button {
              display: inline-flex;
              align-items: center;
              background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
              color: black;
              padding: 24px 48px;
              border-radius: 16px;
              font-weight: bold;
              font-size: 1.25rem;
              text-decoration: none;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
              transition: all 0.3s ease;
            }
            .button:hover {
              transform: translateY(-2px) scale(1.05);
              box-shadow: 0 15px 35px rgba(251, 191, 36, 0.3);
              background: linear-gradient(135deg, #fcd34d 0%, #fbbf24 100%);
            }
            .emoji {
              margin-right: 12px;
              font-size: 1.5rem;
            }
            .note {
              margin-top: 32px;
              padding: 16px;
              background: rgba(255, 255, 255, 0.05);
              border-radius: 12px;
              font-size: 0.9rem;
              color: rgba(255, 255, 255, 0.7);
            }
            @media (max-width: 768px) {
              h1 { font-size: 2.5rem; }
              .container { padding: 32px 24px; }
              .button { padding: 20px 32px; font-size: 1.1rem; }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Welcome to Metaweb</h1>
            <p>Your Gateway to Digital Excellence</p>
            <a href="https://metaweb.ge" class="button">
              <span class="emoji">🚀</span>
              Visit Metaweb
            </a>
            <div class="note">
              <strong>Note:</strong> This is a preview of the online.metaweb.ge subdomain page.
            </div>
          </div>
        </body>
      </html>
    `);
  });

  // SEO Bot API routes
  app.use("/api/seo-bot", seoBot);
  
  // Contact form API routes
  app.use("/api/contact", contact);

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
