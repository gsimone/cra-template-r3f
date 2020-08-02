uniform float time;
uniform vec2 resolution;

varying vec3 vNormal;

void main()	{
    gl_FragColor = vec4(vNormal, 1.);
}
