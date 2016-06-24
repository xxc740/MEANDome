module.exports.index = function(req, res) {
    res.render('index', { title: 'Index' });
};

module.exports.books = function(req, res) {
    res.render('books', { title: 'Books',books:books });
};

module.exports.about = function(req, res) {
    res.render('about', { title: 'About' });
};

var books = [
    {
        id: 0,
        title: "深入浅出Node.js",
        info: "朴灵 / 人民邮电出版社 / 2013-12-1 / CNY 69.00",
        rating: 4,
        img: "https://img3.doubanio.com/mpic/s27269296.jpg",
        tags: ["nodejs", "计算机"],
        brief: '本书从不同的视角介绍了 Node 内在的特点和结构。由首章Node 介绍为索引，涉及Node 的各个方面，主要内容包含模块机制的揭示、异步I/O 实现原理的展现、异步编程的探讨、内存控制的介绍、二进制数据Buffer 的细节、Node 中的网络编程基础、Node 中的Web 开发、进程间的消息传递、Node 测试以及通过Node 构建产品需要的注意事项。最后的附录介绍了Node 的安装、调试、编码规范和NPM 仓库等事宜。本书适合想深入了解 Node 的人员阅读。',
        ISBN: 9787115335500
    },
    {
        id: 1,
        title: "看，那些小丑！",
        info: "[美] 纳博科夫  / 上海译文出版社 / 2016-3-1 / CNY 32.00",
        rating: 4,
        img: "https://img3.doubanio.com/mpic/s28620486.jpg",
        tags: ["文学", "文艺"],
        brief: '从多个角度都可以看出这是老头子自己写的半自传式回忆录小说。假借男主人公写作的艰辛反映出自己的写作历程，故事中每一本小说的书名和内容几乎都可以找到现实中纳博科夫自己的著作相对照。',
        ISBN: 9787532770977
    },
    {
        id: 2,
        title: "再见，我思念如初的人",
        info: "杨朵轶 / 鹭江出版社 / 2016-5 / CNY 36.00",
        rating: 5,
        img: "https://img3.doubanio.com/mpic/s28713980.jpg",
        tags: ["文学", "感情"],
        brief: '如果用一句话来总结这本书，“我终于失去了你”比较适合。 一个多情的少男，在迷惘中挥霍自己的青春，即要追求纯情的真爱，又不能抗拒身体的诱惑，结果只能有一种结果，不会有其它的结果。',
        ISBN: 9787545911282
    }
];
