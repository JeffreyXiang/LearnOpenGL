#version 330 core
in vec2 io_texCoord;

out vec4 FragColor;

uniform sampler2D texture0;
uniform sampler2D texture1;

void main()
{
    FragColor = mix(texture(texture0, io_texCoord), texture(texture1, io_texCoord), 0.2);// * vec4(io_color, 1.0f);
}
