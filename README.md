<p align="center"><img src="https://raw.githubusercontent.com/gsimone/r3f-starter/master/logo.png" width="360" /></p>

```bash
create-react-app my3dapp --template=r3f-ts
```

### Why

- **Typescript** ([Looking for js?](https://github.com/gsimone/cra-template-r3f/tree/js))
- Latest versions of everything
- Works with codesandbox out of the box

### Included libs

- [create-react-app 4](https://github.com/facebook/create-react-app) 
- [three.js](https://github.com/mrdoob/three.js)
- [react-three-fiber](https://github.com/react-spring/react-three-fiber) v5 beta
- [drei](https://github.com/react-spring/drei)
- [react-postprocessing](https://github.com/drcmda/react-postprocessing)

- [glsl-noise](https://github.com/hughsk/glsl-noise#readme)
- [react-spring v9](https://github.com/react-spring/react-spring)

### Misc

- 🌟 create-react-app 4 alpha with *fast refresh*
- 🌟 recommendend vsc extensions for working with glsl ([How do I make glsl-lint work?](#glsl-linter))
- 🌟 babel-glsl macro to compile glsl without touching the `create-react-app config` - 🐛 currently doesn't work in codesandbox -
- draco binaries in `public/draco-gltf/` (the default directory used by `useGLTFLoader` in `drei`)
- example shader material to start playing
- Scene setup with OrbitControls and React-PostProcessing

### Dev stuff

- `eslint` + `prettier` with `husky` & `pretty-quick`
  
### How to use

```

```

Or just fork this repository 🤷‍♂️

### GLSL Linter

You need to download and setup the glsl linter to make linting work in the shader files.

- [Download GLSL lang](https://github.com/KhronosGroup/glslang/releases/tag/master-tot)
- extract the archive
- navigate to `/bin/`
- copy the `glslangValidator` executable to your preferred location eg. `mv glslangValidator /usr/local/bin/glslangValidator`
