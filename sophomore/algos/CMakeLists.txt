cmake_minimum_required(VERSION 3.10)
project(MyProject)

set(CMAKE_CXX_STANDARD 17)

set(SOURCE_FILES main.cpp)

# Add your source files
add_executable(myprogram ${SOURCE_FILES})
