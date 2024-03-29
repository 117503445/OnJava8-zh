import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "On Java 8",
  description: "On Java 8 中文版",
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    sidebar: [
      {
        text: "序",
        items: [
          { text: "前言", link: "/preface" },
          { text: "简介", link: "/introduction" },
        ],
      },
      {
        text: "正文",
        items: [
          { text: "第 1 章 对象的概念", link: "/ch1" },
          { text: "第 2 章 安装 Java 和本书用例", link: "/ch2" },
          { text: "第 3 章 万物皆对象", link: "/ch3" },
          { text: "第 4 章 运算符", link: "/ch4" },
          { text: "第 5 章 控制流", link: "/ch5" },
          { text: "第 6 章 初始化和清理", link: "/ch6" },
          { text: "第 7 章 封装", link: "/ch7" },
          { text: "第 8 章 复用", link: "/ch8" },
          { text: "第 9 章 多态", link: "/ch9" },
          { text: "第 10 章 接口", link: "/ch10" },
          { text: "第 11 章 内部类", link: "/ch11" },
          { text: "第 12 章 集合", link: "/ch12" },
          { text: "第 13 章 函数式编程", link: "/ch13" },
          { text: "第 14 章 流式编程", link: "/ch14" },
          { text: "第 15 章 异常", link: "/ch15" },
          { text: "第 16 章 代码校验", link: "/ch16" },
          { text: "第 17 章 文件", link: "/ch17" },
          { text: "第 18 章 字符串", link: "/ch18" },
          { text: "第 19 章 类型信息", link: "/ch19" },
          { text: "第 20 章 泛型", link: "/ch20" },
          { text: "第 21 章 数组", link: "/ch21" },
          { text: "第 22 章 枚举", link: "/ch22" },
          { text: "第 23 章 注解", link: "/ch23" },
          { text: "第 24 章 并发编程", link: "/ch24" },
          { text: "第 25 章 设计模式", link: "/ch25" },
        ],
      },
      {
        text: "附录",
        items: [
          { text: "补充", link: "/appendices/app-supplements" },
          { text: "编程指南", link: "/appendices/app-programming-guidelines" },
          { text: "文档注释", link: "/appendices/app-javadoc" },
          {
            text: "对象传递和返回",
            link: "/appendices/app-passing-and-returning-objects",
          },
          { text: "流式 IO", link: "/appendices/app-io-streams" },
          { text: "标准IO", link: "/appendices/app-standard-io" },
          { text: "新 IO", link: "/appendices/app-new-io" },
          {
            text: "理解 equals 和 hashCode 方法",
            link: "/appendices/app-understanding-equals-and-hashcode",
          },
          { text: "集合主题", link: "/appendices/app-collection-topics" },
          {
            text: "并发底层原理",
            link: "/appendices/app-low-level-concurrency",
          },
          { text: "数据压缩", link: "/appendices/app-data-compression" },
          { text: "对象序列化", link: "/appendices/app-object-serialization" },
          {
            text: "静态语言类型检查",
            link: "/appendices/app-benefits-and-costs-of-static-type-checking",
          },
          {
            text: "C++和 Java 的优良传统",
            link: "/appendices/app-the-positive-legacy-of-c-plus-plus-and-java",
          },
          {
            text: "成为一名程序员",
            link: "/appendices/app-becoming-a-programmer",
          },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/117503445/OnJava8-zh" },
    ],
  },
});
