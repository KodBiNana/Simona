markdown
<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-Next.JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=black" alt="next.js" />
    <img src="https://img.shields.io/badge/-Vapi-white?style=for-the-badge&color=5dfeca" alt="vapi" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Firebase-black?style=for-the-badge&logoColor=white&logo=firebase&color=DD2C00" alt="firebase" />
  </div>

  <h2>Simona: AI-Powered Interview Coach</h2>
  <p>Originally developed with guidance from <a href="https://jsmastery.com/">JSMastery</a></p>
</div>

## 📋 Table of Contents
1. [Introduction](#-introduction)
2. [Tech Stack](#-tech-stack) 
3. [Features](#-features)
4. [Quick Start](#-quick-start)
5. [Code Snippets](#-code-snippets)

## 🤖 Introduction
Simona is an AI interview preparation platform that provides:
- Realistic voice-based mock interviews  
- Instant performance feedback
- Customizable interview scenarios
- Progress tracking dashboard

Built with modern web technologies for seamless user experience.

## ⚙️ Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Authentication**: Firebase Auth
- **Database**: Firestore
- **Styling**: Tailwind CSS + shadcn/ui  
- **Voice AI**: Vapi.ai
- **AI Model**: Google Gemini
- **Validation**: Zod

## 🔋 Features
### 🎙️ Interview Simulation
- Dynamic question generation
- Voice interaction with AI assistant
- Real-time transcription

### 📊 Performance Insights  
- Detailed scoring across 5 metrics
- Strengths/weaknesses analysis
- Interview history tracking

### 🛡️ Security
- Firebase authentication
- Protected routes
- Session management

## 🤸 Quick Start
### Prerequisites
- Node.js 18+
- npm 9+
- Firebase project
- Vapi.ai account

### Installation
```bash
git clone https://github.com/your-repo/simona.git
cd simona
npm install


Configuration
Create .env.local:

env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-id

# Vapi 
NEXT_PUBLIC_VAPI_WEB_TOKEN=your-token
NEXT_PUBLIC_VAPI_WORKFLOW_ID=your-id

# Gemini
GOOGLE_GENERATIVE_AI_API_KEY=your-key
Run Development Server
bash
npm run dev
Open http://localhost:3000

🕸️ Code Snippets
Generate Interview Questions
javascript
const prompt = `
  Generate ${amount} ${type} questions for ${role} (${level}) position.
  Tech stack: ${techstack.join(', ')}.
  Return as array: ["Q1", "Q2"]
`;
Analyze Interview Feedback
javascript
const feedbackPrompt = `
  Analyze this interview transcript:
  ${transcript}

  Score (0-100) these categories:
  1. Communication
  2. Technical Knowledge
  3. Problem-Solving
  4. Confidence

  Provide specific feedback and suggestions.
`;
<div align="center"> <p>Enhance your skills with <a href="https://jsmastery.pro">JSMastery Pro</a></p> </div> ```
