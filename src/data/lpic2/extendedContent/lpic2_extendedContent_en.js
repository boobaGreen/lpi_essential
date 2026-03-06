export const lpic2_extendedContent_en = {
  'lpic2-200-1': {
    title: 'Measure Resource Usage',
    content: `
# Deep Dive: Measuring Resource Usage

Capacity planning begins with understanding your system's current baseline. In LPIC-2, you must know how to deeply analyze CPU, Memory, Disk I/O, and Network.

## Measuring Memory
Using \`free -m\` or \`vmstat\`. The \`vmstat\` command gives you insight into block I/O and process threads:
\`\`\`bash
vmstat 2 5
\`\`\`
This runs the statistics gathering every 2 seconds, 5 times in a row.

## Measuring Disk I/O
The \`iostat\` command from the \`sysstat\` package.
\`\`\`bash
iostat -x 2
\`\`\`
This provides extended statistics (-x) which includes critical metrics like:
- \`%util\`: Utilization percentage of the disk bandwidth.
- \`await\`: Average time (in ms) for I/O requests to be served.
    `
  }
}
