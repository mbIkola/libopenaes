cmake_minimum_required(VERSION 3.3)

project(test)

enable_testing()
include(DownloadProject)

download_project(
        PROJ                googletest
        GIT_REPOSITORY      https://github.com/google/googletest.git
        GIT_TAG             master
        UPDATE_DISCONNECTED 1
)

add_subdirectory(${googletest_SOURCE_DIR} ${googletest_BINARY_DIR} EXCLUDE_FROM_ALL)

#set(test_SRCS '')

#add_custom_target(fixtures)
#add_custom_command(
#        TARGET fixtures
#        COMMAND ${CMAKE_COMMAND} -E copy
#            ${CMAKE_SOURCE_DIR}/data
#            ${CMAKE_CURRENT_BINARY_DIR}/data
#)

file(COPY data DESTINATION .)

add_executable(runUnitTests gtest.cpp ${test_SRCS})
target_link_libraries(runUnitTests gtest gmock libopenaes)
add_test(runUnitTests runUnitTests)
