**Project Documentation: AvatarMate**

**Description:**

AvatarMate is a 3D avatar animation showcase built with React and Three.js. It allows users to interact with a 3D avatar by selecting various animations. The avatar responds to different animations and can follow the camera or cursor, creating an engaging 3D experience.

**Live Demo:**

You can experience AvatarMate by visiting the following link: AvatarMate Demo

**Project Structure:**

The project consists of three primary components:

**App.jsx:** The main entry point of the application where all components are integrated.

**Experience.jsx:** This component handles the 3D scene setup, including camera controls, lighting, and the integration of the Avatar component. Users can select different animations using Leva controls.

**Avatar.jsx:** The Avatar component represents the 3D avatar model and handles animations. It uses the useFBX and useGLTF hooks from the @react-three/drei library to load the 3D model and animations. The useAnimations hook manages animation playback, and the avatar's position can be adjusted for specific animations.

**Integration Instructions:**

First, clone the AvatarMate project repository from GitHub.

```bash
git clone https://github.com/madewill/AvatarMate.git

```
Navigate to the project directory.


```bash
cd AvatarMate
```

Install the required dependencies.

```bash
npm install
```
Start the development server.

```bash
npm start
```

Open your web browser and visit http://localhost:3000 to see the live AvatarMate application.

**Experience.jsx:**

The Experience component is the main 3D scene setup. It includes:

Camera controls with OrbitControls.
A sky background.
An environment preset with a sunset.
Contact shadows for realistic lighting.
Leva controls for selecting different animations.
Integration of the Avatar component, passing the selected animation as a prop.
Conditional rendering of extra elements (e.g., a box) based on the animation selection.

**Avatar.jsx:**

The Avatar component handles the 3D avatar model, animations, and interaction. It includes:

Loading 3D model and animations using the useFBX and useGLTF hooks.
Naming and managing animations to avoid conflicts.
Using the useAnimations hook to play animations on the avatar.
Real-time interaction with the avatar: following the camera or cursor.
Adjusting the avatar's position for specific animations (e.g., "Sleeping").
Customization:

You can customize AvatarMate by adding more animations, changing the avatar model, or adjusting the 3D scene's environment. The Leva controls in the Experience component provide an interactive way to explore different animations.

**Deployment:**

To deploy your AvatarMate project, you can use platforms like Vercel, Netlify, or GitHub Pages. Make sure to build your project before deployment:

```bash
npm run build
```

Then, follow the deployment instructions for your chosen platform.

**Conclusion:**

AvatarMate is an engaging 3D avatar animation showcase built with React and Three.js. Users can interact with the avatar and explore various animations. Feel free to customize and extend the project to create your unique 3D experiences.

Enjoy exploring AvatarMate and have fun with your 3D avatar animations!#   A v a t a r - A n i m a t i o n - C o n f i g u r a t o r -  
 