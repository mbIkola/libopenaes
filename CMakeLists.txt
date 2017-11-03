cmake_minimum_required(VERSION 3.9)
project(openaes)

set(CMAKE_CXX_STANDARD 11)

set(CMAKE_MODULE_PATH
        ${CMAKE_MODULE_PATH}
        ${PROJECT_SOURCE_DIR}/cmake
)


set(CMAKE_CXX_FLAGS_DEBUG "${CMAKE_CXX_FLAGS_DEBUG} -fno-strict-aliasing")
set(CMAKE_CXX_FLAGS_RELEASE "${CMAKE_CXX_FLAGS_DEBUG} -fno-strict-aliasing")

include_directories(include)

add_library(libopenaes
        src/openaes.c
        include/openaes/openaes.h)

add_subdirectory(test)
