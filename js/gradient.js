const gradientFixer = {
    radial: function(w, h, i, j, ow, oh, dd) {
        const ot = h / w;
        const xi = Math.abs(i - (w / 2));
        const yj = Math.abs(j - (h / 2));
        const xo = ow;
        const yo = oh;
        const rro = Math.hypot(xo, yo);
        const rr = Math.hypot(w / 2, h / 2);
        if (w > h) {
            return Math.round(255 * (1 - (Math.sqrt(Math.pow(xi, 2) * Math.pow(ot, 2) + Math.pow(xi, 2) + (Math.pow(yj, 2) / Math.pow(ot, 2)) + Math.pow(yj, 2)) - rro) * dd));
        } else {
            return Math.round(255 * (1 - ((Math.sqrt(Math.pow(yj, 2) * Math.pow(ot, 2) + Math.pow(xi, 2) + (Math.pow(xi, 2) / Math.pow(ot, 2)) + Math.pow(yj, 2))), rro) * dd));
        }
    },
    rect: function(w, h, i, j, ow, oh, dd) {
        const ot = h / w;
        const xi = Math.abs(i - (w / 2));
        const yj = Math.abs(j - (h / 2));
        const xo = ow;
        const yo = oh;
        const rro = Math.hypot(xo, yo);
        const rr = Math.hypot(w / 2, h / 2);
        if (yj > xi * ot) {
            return Math.round(255 * (1 - (Math.hypot(yj / ot, yj) - rro) * dd));
        } else {
            return Math.round(255 * (1 - (Math.hypot(ot * xi, xi) - rro) * dd));
        }
    },
    diamond: function(w, h, i, j, ow, oh, dd) {
        const ot = h / w;
        const xi = Math.abs(i - (w / 2));
        const yj = Math.abs(j - (h / 2));
        const xo = ow;
        const yo = oh;
        const rro = Math.hypot(xo, yo);
        const rr = Math.hypot(w / 2, h / 2);
        return Math.round(255 * (1 - ((xi + (yj / ot) - xo) * dd)));
    }
};

/**
 * 生成渐变效果
 * @param  {[type]} imageData 像素数据
 * @param  {[type]} midPoint  中心点
 * @param  {String} type      渐变类型
 */
function gradient(imageData, midPoint, type = 'radial') {
    const { width, height } = imageData;

    const midpoint = midPoint || 0;

    if (midpoint < 0 || midpoint > 1) {
        throw new Error('midpoint must be 0 to 1. current midpoint is:' + midpoint);
    }

    const opacityWidth = Math.floor(midpoint * width / 2);
    const opacityHeight = Math.floor(midpoint * height / 2);

    const newImageData = new ImageData(width, height);

    let dd;
    if (midpoint === 1) {
        dd = 1;
    } else {
        dd = 1 / (width / 2 - opacityWidth);
    }

    const fixFunction = gradientFixer[type];

    if (fixFunction) {
        for (let i = 0, data = imageData.data; i < height; i++) {
            for (let j = 0; j < width; j++) {
                const index = i * width * 4 + j * 4,
                    r = data[index],
                    g = data[index + 1],
                    b = data[index + 2];
                const a = fixFunction(width, height, j, i, opacityWidth, opacityHeight, dd);
                imageData.data[index] = r;
                imageData.data[index + 1] = g;
                imageData.data[index + 2] = b;
                imageData.data[index + 3] = a;
            }
        }
    }
}
