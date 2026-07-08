const fs = require("fs");
const terser = require("terser");
const JavaScriptObfuscator = require("javascript-obfuscator");

(async () => {
    const code = fs.readFileSync("app.js", "utf8");

    // 1. 압축
    const minified = await terser.minify(code);

    // 2. 난독화
    const obfuscated = JavaScriptObfuscator.obfuscate(minified.code, {
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 1,
        stringArray: true,
        stringArrayEncoding: ["base64"],
        stringArrayThreshold: 1,
        renameGlobals: false,
        selfDefending: true,
        simplify: true
    });

    fs.writeFileSync("app.min.js", obfuscated.getObfuscatedCode());

    console.log("✅ app.min.js 생성 완료!");
})();