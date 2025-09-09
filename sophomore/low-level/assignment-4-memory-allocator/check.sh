#!/bin/bash

if [ -d "build" ]; then
    rm -r build
fi

# mkdir build && cd build
# cmake .. -DCMAKE_BUILD_TYPE=Debug
# cd ..
# cmake --build ./build --target check

# cmake --build ./build
# cp build/solution/image-transform .
# ./image-transform input.bmp output.bmp none 

mkdir build
cmake -B ./build/ -G "Ninja Multi-Config" -DCMAKE_C_COMPILER=clang
cmake --build ./build/ --config ASan  --target check
cmake --build ./build/ --config LSan  --target check
cmake --build ./build/ --config MSan  --target check
cmake --build ./build/ --config UBSan --target check
