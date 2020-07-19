cmake_minimum_required(VERSION 3.10 FATAL_ERROR)

project(LearnOpenGL)
message(STATUS "[Project] ${PROJECT_NAME} ${PROJECT_VERSION}")

include(cmake/XCMake.cmake)

Xi_projectInit()

Xi_findPackage(GLFW3)
Xi_findPackage(OpenGL)

Xi_addAllSubDir(src)

