# WasmCheckers
Checker game written in wasm

## Prerequisite
You need to install wabt before run the application.

https://github.com/WebAssembly/wabt

### Build the wat files
```bash
wat2wasm -o func_test.wasm func_test.wat
```

## Hard coded values

| Binary value | Meaning |
| ------------ | ------- |
| 0000         | Unoccupied |
| 0001         | Black |
| 0010         | White |
| 0100         | Crowned |
