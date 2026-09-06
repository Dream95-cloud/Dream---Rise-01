# Performance & Hermes update

I enabled Hermes as the JS engine in app.json and added a metro.config.js configuration with inlineRequires enabled to improve cold-start time. I also added a small runtime file to disable console.* calls in production.

Validation steps (run locally):
1. npm install
2. npm run prebuild
   - This step generates native android/ and ios/ projects and applies Hermes configuration.
3. npm run android (or open the project in Android Studio and run)
4. Verify the app starts and Home screen appears.

Notes:
- Hermes requires a prebuild step. If you use Expo Go, Hermes may not be active; use prebuild + device/emulator or EAS build.
- inlineRequires reduces initial module initialization; measure cold-start time before/after.
- Disabling console.* in production reduces JS overhead; keep it enabled in development.
