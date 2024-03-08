// 创建一个全屏的 canvas 元素
const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

// 获取 2D 上下文
const ctx = canvas.getContext('2d');

// 雪花片的数量
const numFlakes = 200;

// 存储雪花片的数组
const flakes = [];

// 创建雪花片对象
function createFlake() {
    return {
        x: Math.random() * canvas.width,
        y: 0,
        radius: Math.random() * 3 + 2, // 雪花片半径范围为 2 到 5
        speed: Math.random() * 2 + 0.5 // 雪花片下落速度范围为 0.5 到 2
    };
}

// 初始化雪花片数组
for (let i = 0; i < numFlakes; i++) {
    flakes.push(createFlake());
}

// 绘制雪花片
function drawFlakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'; // 设置雪花片颜色为白色，透明度为 0.8

    flakes.forEach(flake => {
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fill();

        // 更新雪花片位置
        flake.y += flake.speed;

        // 如果雪花片超出屏幕底部，则重新放置到顶部
        if (flake.y > canvas.height) {
            flake.x = Math.random() * canvas.width;
            flake.y = 0;
        }
    });

    requestAnimationFrame(drawFlakes);
}

// 开始动画
drawFlakes();
