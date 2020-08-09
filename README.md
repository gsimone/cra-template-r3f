<p align="center"><img src="https://raw.githubusercontent.com/gsimone/r3f-starter/master/public/logo.png" width="360" /></p>

📦 [Fork me on codesandbox](https://codesandbox.io/s/github/gsimone/r3f-starter)

### Why

- Latest versions of everything
- Works with codesandbox out of the box

### Included libs

- [three.js](https://github.com/mrdoob/three.js)
- [react-three-fiber](https://github.com/react-spring/react-three-fiber) v5 beta
- [drei](https://github.com/react-spring/drei)
- [react-postprocessing](https://github.com/drcmda/react-postprocessing)

- [glsl-noise](https://github.com/hughsk/glsl-noise#readme)
- [react-spring v9](https://github.com/react-spring/react-spring)

### Misc

- 🌟 recommendend vsc extensions for working with glsl
- 🌟babel-glsl macro to compile glsl without touching the `create-react-app config`
- draco binaries in `public/draco-gltf/` (the default directory used by `useGLTFLoader` in `drei`)
- simple shaders to start playing
- Scene setup with OrbitControls and React-PostProcessing

### Dev stuff

- `eslint`
- `prettier` with `husky` & `pretty-quick`
- `react-fast-refresh`
  
## How to use

```
npx degit gsimone/r3f-starter my-project
cd my-project

yarn && yarn start
```

Or just fork this repository 🤷‍♂️



# GLSL Linter

You need to download and setup the glsl linter to make linting work in the shader files.

- [Download GLSL lang](https://github.com/KhronosGroup/glslang/releases/tag/master-tot)
- extract the archive
- navigate to `/bin/`
- copy the `glslangValidator` executable to your preferred location eg. `mv glslangValidator /usr/local/bin/glslangValidator`
