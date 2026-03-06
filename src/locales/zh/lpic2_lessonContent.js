export const lpic2_lessonContent = {
  // Topic 200
  'lpic2-200-1': {
    title: '测量资源使用率',
    content: `
### 系统硬件瓶颈（Bottlenecks）综合评测
在 LPIC-2 学历晋级阶段着重讨论企业高级监控以及"容量预测 Capacity Planning" 这一重要核心命题。
- **处理器 (CPU)**：\`mpstat\`、\`top\`、\`uptime\` 抓取运算积压数值。
- **系统运行内存状况 (RAM)**：\`free\`、\`vmstat\` 识别交换换页动作等严重不足现象。
- **持久性块设备读取 / 写入状况 (硬盘 I/O)**：通过使用 \`iostat\`、\`iotop\` 分析进程占用时长。
- **分析网络拥塞或套接字开放状况**: 借由 \`iftop\` 等动态显示以及 \`netstat\` / \`ss\` 观察端口连线状态建立全盘判断。
    `,
  },
}
