# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.21

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:

#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:

# Disable VCS-based implicit rules.
% : %,v

# Disable VCS-based implicit rules.
% : RCS/%

# Disable VCS-based implicit rules.
% : RCS/%,v

# Disable VCS-based implicit rules.
% : SCCS/s.%

# Disable VCS-based implicit rules.
% : s.%

.SUFFIXES: .hpux_make_needs_suffix_list

# Command-line flag to silence nested $(MAKE).
$(VERBOSE)MAKESILENT = -s

#Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:
.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /snap/cmake/920/bin/cmake

# The command to remove a file.
RM = /snap/cmake/920/bin/cmake -E rm -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /home/pi/pile-placer/api/proj-8.1.0

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/pi/pile-placer/api/proj-8.1.0/build

# Include any dependencies generated for this target.
include test/unit/CMakeFiles/pj_phi2_test.dir/depend.make
# Include any dependencies generated by the compiler for this target.
include test/unit/CMakeFiles/pj_phi2_test.dir/compiler_depend.make

# Include the progress variables for this target.
include test/unit/CMakeFiles/pj_phi2_test.dir/progress.make

# Include the compile flags for this target's objects.
include test/unit/CMakeFiles/pj_phi2_test.dir/flags.make

test/unit/CMakeFiles/pj_phi2_test.dir/main.cpp.o: test/unit/CMakeFiles/pj_phi2_test.dir/flags.make
test/unit/CMakeFiles/pj_phi2_test.dir/main.cpp.o: ../test/unit/main.cpp
test/unit/CMakeFiles/pj_phi2_test.dir/main.cpp.o: test/unit/CMakeFiles/pj_phi2_test.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/pi/pile-placer/api/proj-8.1.0/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object test/unit/CMakeFiles/pj_phi2_test.dir/main.cpp.o"
	cd /home/pi/pile-placer/api/proj-8.1.0/build/test/unit && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT test/unit/CMakeFiles/pj_phi2_test.dir/main.cpp.o -MF CMakeFiles/pj_phi2_test.dir/main.cpp.o.d -o CMakeFiles/pj_phi2_test.dir/main.cpp.o -c /home/pi/pile-placer/api/proj-8.1.0/test/unit/main.cpp

test/unit/CMakeFiles/pj_phi2_test.dir/main.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/pj_phi2_test.dir/main.cpp.i"
	cd /home/pi/pile-placer/api/proj-8.1.0/build/test/unit && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/pi/pile-placer/api/proj-8.1.0/test/unit/main.cpp > CMakeFiles/pj_phi2_test.dir/main.cpp.i

test/unit/CMakeFiles/pj_phi2_test.dir/main.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/pj_phi2_test.dir/main.cpp.s"
	cd /home/pi/pile-placer/api/proj-8.1.0/build/test/unit && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/pi/pile-placer/api/proj-8.1.0/test/unit/main.cpp -o CMakeFiles/pj_phi2_test.dir/main.cpp.s

test/unit/CMakeFiles/pj_phi2_test.dir/pj_phi2_test.cpp.o: test/unit/CMakeFiles/pj_phi2_test.dir/flags.make
test/unit/CMakeFiles/pj_phi2_test.dir/pj_phi2_test.cpp.o: ../test/unit/pj_phi2_test.cpp
test/unit/CMakeFiles/pj_phi2_test.dir/pj_phi2_test.cpp.o: test/unit/CMakeFiles/pj_phi2_test.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/pi/pile-placer/api/proj-8.1.0/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Building CXX object test/unit/CMakeFiles/pj_phi2_test.dir/pj_phi2_test.cpp.o"
	cd /home/pi/pile-placer/api/proj-8.1.0/build/test/unit && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT test/unit/CMakeFiles/pj_phi2_test.dir/pj_phi2_test.cpp.o -MF CMakeFiles/pj_phi2_test.dir/pj_phi2_test.cpp.o.d -o CMakeFiles/pj_phi2_test.dir/pj_phi2_test.cpp.o -c /home/pi/pile-placer/api/proj-8.1.0/test/unit/pj_phi2_test.cpp

test/unit/CMakeFiles/pj_phi2_test.dir/pj_phi2_test.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/pj_phi2_test.dir/pj_phi2_test.cpp.i"
	cd /home/pi/pile-placer/api/proj-8.1.0/build/test/unit && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/pi/pile-placer/api/proj-8.1.0/test/unit/pj_phi2_test.cpp > CMakeFiles/pj_phi2_test.dir/pj_phi2_test.cpp.i

test/unit/CMakeFiles/pj_phi2_test.dir/pj_phi2_test.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/pj_phi2_test.dir/pj_phi2_test.cpp.s"
	cd /home/pi/pile-placer/api/proj-8.1.0/build/test/unit && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/pi/pile-placer/api/proj-8.1.0/test/unit/pj_phi2_test.cpp -o CMakeFiles/pj_phi2_test.dir/pj_phi2_test.cpp.s

# Object files for target pj_phi2_test
pj_phi2_test_OBJECTS = \
"CMakeFiles/pj_phi2_test.dir/main.cpp.o" \
"CMakeFiles/pj_phi2_test.dir/pj_phi2_test.cpp.o"

# External object files for target pj_phi2_test
pj_phi2_test_EXTERNAL_OBJECTS =

bin/pj_phi2_test: test/unit/CMakeFiles/pj_phi2_test.dir/main.cpp.o
bin/pj_phi2_test: test/unit/CMakeFiles/pj_phi2_test.dir/pj_phi2_test.cpp.o
bin/pj_phi2_test: test/unit/CMakeFiles/pj_phi2_test.dir/build.make
bin/pj_phi2_test: lib/libgtest.so
bin/pj_phi2_test: lib/libproj.so.23.0.1
bin/pj_phi2_test: test/unit/CMakeFiles/pj_phi2_test.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/home/pi/pile-placer/api/proj-8.1.0/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_3) "Linking CXX executable ../../bin/pj_phi2_test"
	cd /home/pi/pile-placer/api/proj-8.1.0/build/test/unit && $(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/pj_phi2_test.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
test/unit/CMakeFiles/pj_phi2_test.dir/build: bin/pj_phi2_test
.PHONY : test/unit/CMakeFiles/pj_phi2_test.dir/build

test/unit/CMakeFiles/pj_phi2_test.dir/clean:
	cd /home/pi/pile-placer/api/proj-8.1.0/build/test/unit && $(CMAKE_COMMAND) -P CMakeFiles/pj_phi2_test.dir/cmake_clean.cmake
.PHONY : test/unit/CMakeFiles/pj_phi2_test.dir/clean

test/unit/CMakeFiles/pj_phi2_test.dir/depend:
	cd /home/pi/pile-placer/api/proj-8.1.0/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/pi/pile-placer/api/proj-8.1.0 /home/pi/pile-placer/api/proj-8.1.0/test/unit /home/pi/pile-placer/api/proj-8.1.0/build /home/pi/pile-placer/api/proj-8.1.0/build/test/unit /home/pi/pile-placer/api/proj-8.1.0/build/test/unit/CMakeFiles/pj_phi2_test.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : test/unit/CMakeFiles/pj_phi2_test.dir/depend

