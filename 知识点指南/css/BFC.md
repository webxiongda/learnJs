# BFC (块级作用域上下文)
网站参考
https://blog.csdn.net/wyf521995/article/details/103106913?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.pc_relevant_default&utm_relevant_index=2

- 1.父容器没有子容器大,子容器又包含浮动元素,就容易造成高度塌陷

```
方案1
.container{
  overflow:hidden;
}
方案2
.container::after {
  content: "";
  display: block; /* 不能少 */
  clear: left;
}
```

- 2.父容器中有个子容器,他们分别 margin-top 10px 和 50px,结果上面值撑开了 50px;

```
给子容器上面添加div标签为overflow:hidden,就能显示出来,触发了bfc机制
```
