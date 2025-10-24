/** CÓ 3 CÁCH KHAI BÁO BIẾN TRONG JAVASCRIPT - var - let - const */

/** ---------------BLOCK-SCOPE--------------- */
// Scope được xác định bởi cặp dấu {}

const testScope = () => {
    {
        var scopeVar = "HocPhamSWE - var";
        // console.log("log ~ testScope ~ scopeVar:", scopeVar);

        let scopeLet = "HocPhamSWE - let";
        // console.log("log ~ testScope ~ scopeLet:", scopeLet);

        const scopeConst = "HocPhamSWE - const";
        // console.log("log ~ testScope ~ scopeConst:", scopeConst);
    }
    console.log("log ~ testScope ~ scopeVar:", scopeVar);
    console.log("log ~ testScope ~ scopeLet:", scopeLet);
    console.log("log ~ testScope ~ scopeConst:", scopeConst);
};

testScope();

// Summary:
// - var: KHÔNG có block-scope, có function-scope
// - let, const: CÓ block-scope, có function-scope
// => NÊN SỬ DỤNG let, const THAY VÌ var ĐỂ TRÁNH NHỮNG LỖI KHÓ LƯỜNG TRONG QUÁ TRÌNH LẬP TRÌNH
