

export const downloadImage = (base64Data, filename) => {
    const link = document.createElement("a");
    link.href = base64Data;
    link.download = filename;
    link.click();
};