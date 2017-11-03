# OpenAES 0.8.1 WASM 

# LICENSE 

   1  * ---------------------------------------------------------------------------
   2  * OpenAES License
   3  * ---------------------------------------------------------------------------
   4  * Copyright (c) 2012, Nabil S. Al Ramli, www.nalramli.com
   5  * All rights reserved.
   6  * 
   7  * Redistribution and use in source and binary forms, with or without
   8  * modification, are permitted provided that the following conditions are met:
   9  * 
  10  *   - Redistributions of source code must retain the above copyright notice,
  11  *     this list of conditions and the following disclaimer.
  12  *   - Redistributions in binary form must reproduce the above copyright
  13  *     notice, this list of conditions and the following disclaimer in the
  14  *     documentation and/or other materials provided with the distribution.
  15  * 
  16  * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  17  * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  18  * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  19  * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
  20  * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
  21  * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
  22  * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
  23  * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
  24  * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
  25  * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
  26  * POSSIBILITY OF SUCH DAMAGE.
  27  * ---------------------------------------------------------------------------






# Purpose #
static library which would be used for further iterative modifications/optimizations and cross-compiled to few other non-standard platforms, like 'browser's asm.js (see emscripten folder in project root)

# howto
`cmake .` and `make ` should work for you. CLion should autogenerate build targets if you import project from source. 

For wasm compilation you need either:
- docker installed on pc (see emscripten/makefile) to build wasm and wrappers using emscripten SDK
- npm, build-tools-essential, clang, cmake to build wasm using node-webassembly project (see package.json for details)


