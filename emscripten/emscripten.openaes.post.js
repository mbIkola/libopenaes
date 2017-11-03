function _arrayToHeap(typedArray){
  var numBytes = typedArray.length * typedArray.BYTES_PER_ELEMENT;
  var ptr = Module._malloc(numBytes);
  var heapBytes = new Uint8Array(Module.HEAPU8.buffer, ptr, numBytes);
  heapBytes.set(new Uint8Array(typedArray.buffer));
  return heapBytes;
}

function _freeArray(heapBytes){
  Module._free(heapBytes.byteOffset);
}

const POINTER = 'number';
const INTEGER = 'number';
const CSTRING = 'string';

Module["openaesWrapper"] = function openaesWrapper( message ) {
    if ( typeof message == "string" ) {
        // this is an hex-encoded string.
        message = message.split(/(?=(?:..)*$)/).map( function(a)  {  return parseInt(a, 0x010); });
    }
    if ( message instanceof Array ) {
        message = new Uint8Array(message);
    }

    if ( ! (message  instanceof Uint8Array)  ) {
        throw new Error("Unsupported message type to hash. Fuck off");
    }

    var output = new Uint8Array(new Array(message.length));
    var inputHeap = _arrayToHeap(message);
    var outHeap   = _arrayToHeap(output);

    Module.ccall('openaes', null, [POINTER, INTEGER, POINTER], [inputHeap, message.length, outHeap ]);

    var res = new output.constructor(outHeap.buffer, outHeap.byteOffset, output.length);
    _freeArray(outHeap);
    _freeArray(inputHeap);

    return res;
}
