# Ionic AdMob POC

This project is a proof-of-concept (POC) for integrating AdMob in an Ionic application.

---

## Setup & Build Instructions

### 1. Build the Ionic project
```bash
git clone https://github.com/<your-username>/ionic-admob-poc.git
cd ionic-admob-poc

# Install Package
npm install

# Build Ionic project
ionic build

# Add Capacitor platforms (if needed)
npx cap add android
npx cap add ios

# Sync Ionic build with Capacitor
npx cap sync

# Open Android project in Android Studio
npx cap open android

# Open iOS project in Xcode
npx cap open ios

# Serve in browser
ionic serve
