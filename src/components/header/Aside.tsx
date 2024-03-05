'use client'

import { motion } from 'framer-motion'

export default function Aside() {
  return (
    <motion.div className='w-full overflow-hidden'>
      <motion.svg
        className='fill-monospace-white'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1792 287'
        fill='currentColor'
        initial={{ y: '102%' }}
        animate={{
          y: '0%',
          transition: {
            duration: 0.7,
            ease: [0.65, 0.05, 0.36, 1]
          }
        }}
      >
        <path d='M1628.72 148.287C1628.72 129.626 1632.16 113.409 1639.05 99.6354C1645.93 85.6398 1655.71 74.8654 1668.37 67.3122C1681.03 59.759 1695.7 55.9825 1712.36 55.9825C1726.8 55.9825 1739.79 59.2037 1751.35 65.6461C1763.12 72.0885 1772.56 82.0854 1779.67 95.6367C1787 109.188 1791 126.072 1791.67 146.287L1792 158.284H1665.04C1666.37 174.945 1671.15 187.83 1679.37 196.938C1687.59 206.046 1698.58 210.601 1712.36 210.601C1721.24 210.601 1729.35 208.268 1736.68 203.603C1744.01 198.715 1749.46 192.051 1753.01 183.609L1789.33 186.275C1784.22 202.714 1774.56 215.932 1760.34 225.929C1746.35 235.704 1730.35 240.591 1712.36 240.591C1695.7 240.591 1681.03 236.815 1668.37 229.261C1655.71 221.708 1645.93 211.045 1639.05 197.271C1632.16 183.276 1628.72 166.948 1628.72 148.287ZM1755.34 131.625C1753.12 115.853 1748.12 104.301 1740.35 96.9696C1732.57 89.6386 1723.24 85.9731 1712.36 85.9731C1699.47 85.9731 1689.03 89.9718 1681.03 97.9693C1673.04 105.967 1667.93 117.185 1665.71 131.625H1755.34Z' />
        <path d='M1564.6 121.629C1563.05 110.743 1558.38 102.19 1550.61 95.9699C1542.83 89.5275 1533.83 86.3063 1523.62 86.3063C1508.29 86.3063 1496.51 91.749 1488.29 102.634C1480.07 113.52 1475.96 128.737 1475.96 148.287C1475.96 167.836 1480.07 183.054 1488.29 193.939C1496.51 204.825 1508.29 210.267 1523.62 210.267C1534.5 210.267 1543.72 206.935 1551.27 200.271C1559.05 193.384 1563.94 183.942 1565.94 171.946L1602.26 173.945C1600.48 187.497 1595.81 199.382 1588.26 209.601C1580.93 219.598 1571.6 227.262 1560.27 232.594C1549.16 237.925 1536.94 240.591 1523.62 240.591C1506.73 240.591 1491.96 236.815 1479.3 229.261C1466.86 221.708 1457.19 211.045 1450.3 197.271C1443.42 183.276 1439.97 166.948 1439.97 148.287C1439.97 129.626 1443.42 113.409 1450.3 99.6354C1457.19 85.6398 1466.86 74.8654 1479.3 67.3122C1491.96 59.759 1506.73 55.9825 1523.62 55.9825C1536.5 55.9825 1548.5 58.6483 1559.6 63.98C1570.93 69.0895 1580.15 76.4205 1587.26 85.9731C1594.59 95.5256 1599.04 106.744 1600.59 119.629L1564.6 121.629Z' />
        <path d='M1250 112.631C1253.56 95.0813 1261.89 81.3078 1274.99 71.311C1288.1 61.092 1304.76 55.9825 1324.98 55.9825C1348.97 55.9825 1367.3 62.4249 1379.96 75.3097C1392.62 87.9724 1398.95 106.411 1398.95 130.626V197.271C1398.95 201.27 1399.84 204.158 1401.62 205.935C1403.4 207.713 1406.06 208.601 1409.62 208.601H1416.95V236.592H1405.29H1403.95C1397.73 236.592 1391.96 235.926 1386.62 234.593C1381.29 233.26 1376.74 230.594 1372.96 226.596C1369.19 222.597 1367.19 216.932 1366.96 209.601C1362.74 218.487 1355.75 225.929 1345.97 231.927C1336.2 237.703 1324.42 240.591 1310.65 240.591C1292.21 240.591 1276.99 236.037 1265 226.929C1253 217.821 1247 205.602 1247 190.274C1247 178.944 1249.56 169.836 1254.67 162.949C1260 156.062 1267.33 150.731 1276.66 146.954C1286.21 143.177 1298.54 139.845 1313.65 136.957L1364.3 126.96C1364.08 112.742 1360.74 102.19 1354.3 95.3035C1347.86 88.4167 1338.08 84.9734 1324.98 84.9734C1314.76 84.9734 1306.32 87.5281 1299.65 92.6376C1292.99 97.7471 1288.32 105.189 1285.66 114.964L1250 112.631ZM1282.99 189.607C1282.99 196.494 1285.88 202.159 1291.65 206.602C1297.65 211.045 1306.21 213.266 1317.31 213.266C1326.42 213.266 1334.53 211.156 1341.64 206.935C1348.97 202.492 1354.63 195.939 1358.63 187.275C1362.85 178.611 1364.97 168.058 1364.97 155.618V153.952L1326.98 160.616L1320.65 161.616C1311.54 163.393 1304.54 165.059 1299.65 166.614C1294.76 167.947 1290.77 170.502 1287.66 174.279C1284.55 178.055 1282.99 183.165 1282.99 189.607Z' />
        <path d='M1052.35 59.9812H1084.67L1086.01 97.3028L1082.67 92.3044C1087.12 80.5303 1094.11 71.5331 1103.67 65.3129C1113.44 59.0926 1125.33 55.9825 1139.32 55.9825C1155.98 55.9825 1169.98 60.2034 1181.31 68.6452C1192.64 76.8648 1201.08 87.9724 1206.63 101.968C1212.41 115.741 1215.3 131.181 1215.3 148.287C1215.3 165.393 1212.41 180.943 1206.63 194.939C1201.08 208.712 1192.64 219.82 1181.31 228.262C1169.98 236.481 1155.98 240.591 1139.32 240.591C1129.99 240.591 1121.55 239.258 1114 236.592C1106.67 233.704 1100.33 229.484 1095 223.93C1089.89 218.376 1085.89 211.6 1083.01 203.603L1087.01 199.271V286.577H1052.35V59.9812ZM1083.67 148.287C1083.67 159.394 1085.34 169.613 1088.67 178.944C1092.23 188.274 1097.56 195.827 1104.67 201.603C1111.78 207.379 1120.66 210.267 1131.32 210.267C1147.1 210.267 1158.87 204.38 1166.65 192.606C1174.64 180.61 1178.64 165.837 1178.64 148.287C1178.64 130.959 1174.64 116.297 1166.65 104.301C1158.65 92.3044 1146.88 86.3063 1131.32 86.3063C1120.66 86.3063 1111.78 89.1943 1104.67 94.9702C1097.56 100.746 1092.23 108.299 1088.67 117.63C1085.34 126.96 1083.67 137.179 1083.67 148.287Z' />
        <path d='M974.012 115.297C972.235 106.189 967.459 98.969 959.683 93.6373C952.13 88.0835 943.577 85.3066 934.025 85.3066C924.694 85.3066 916.919 87.6392 910.699 92.3044C904.478 96.7474 901.479 102.746 901.702 110.299C901.702 117.408 905.367 122.961 912.698 126.96C920.029 130.959 929.359 134.069 940.689 136.291C956.684 139.179 969.791 142.622 980.01 146.621C990.229 150.619 998.227 156.173 1004 163.282C1009.78 170.391 1012.67 179.499 1012.67 190.607C1012.67 201.715 1009.22 211.045 1002.34 218.598C995.672 225.929 986.897 231.483 976.012 235.26C965.348 238.814 953.685 240.591 941.023 240.591C926.138 240.591 912.809 238.148 901.035 233.26C889.261 228.373 879.931 221.486 873.044 212.6C866.157 203.492 862.269 192.939 861.381 180.943L897.036 178.611C898.369 185.497 900.813 191.384 904.367 196.272C908.144 200.937 913.031 204.602 919.029 207.268C925.25 209.712 932.47 210.934 940.689 210.934C950.02 210.934 958.35 209.268 965.681 205.935C973.012 202.381 976.678 196.827 976.678 189.274C976.456 183.942 974.79 179.721 971.68 176.611C968.792 173.501 965.126 171.169 960.683 169.613C956.24 168.058 950.131 166.503 942.355 164.948C940.578 164.726 938.023 164.171 934.691 163.282C919.807 160.172 907.589 156.84 898.036 153.285C888.483 149.509 880.708 144.288 874.71 137.624C868.712 130.737 865.713 122.073 865.713 111.632C865.713 100.302 868.601 90.5272 874.377 82.3075C880.153 73.8657 888.372 67.4233 899.036 62.9803C909.921 58.3151 922.584 55.9825 937.024 55.9825C955.907 55.9825 972.013 61.203 985.342 71.6442C998.671 81.8632 1006.78 95.7478 1009.67 113.298L974.012 115.297Z' />
        <path d='M747.817 240.591C730.934 240.591 716.161 236.815 703.498 229.261C691.057 221.708 681.394 211.045 674.507 197.271C667.62 183.276 664.177 166.948 664.177 148.287C664.177 129.626 667.62 113.409 674.507 99.6354C681.394 85.6398 691.057 74.8654 703.498 67.3122C716.161 59.759 730.934 55.9825 747.817 55.9825C764.479 55.9825 779.141 59.759 791.804 67.3122C804.466 74.8654 814.241 85.6398 821.128 99.6354C828.014 113.409 831.458 129.626 831.458 148.287C831.458 166.948 828.014 183.276 821.128 197.271C814.241 211.045 804.466 221.708 791.804 229.261C779.141 236.815 764.479 240.591 747.817 240.591ZM747.817 210.267C762.924 210.267 774.587 204.825 782.806 193.939C791.248 183.054 795.469 167.836 795.469 148.287C795.469 128.737 791.248 113.52 782.806 102.634C774.587 91.749 762.924 86.3063 747.817 86.3063C732.489 86.3063 720.715 91.749 712.495 102.634C704.275 113.52 700.166 128.737 700.166 148.287C700.166 167.836 704.275 183.054 712.495 193.939C720.715 204.825 732.489 210.267 747.817 210.267Z' />
        <path d='M514.19 59.9812L515.856 106.966L511.524 103.301C514.412 87.306 520.966 75.4208 531.185 67.6455C541.626 59.8701 554.289 55.9825 569.173 55.9825C588.278 55.9825 602.94 62.2027 613.159 74.6433C623.6 86.8617 628.821 102.968 628.821 122.961V236.592H594.165V133.292C594.165 122.628 593.054 113.853 590.833 106.966C588.611 99.8576 584.946 94.5259 579.836 90.9715C574.949 87.1949 568.396 85.3066 560.176 85.3066C546.847 85.3066 536.406 89.4164 528.852 97.6361C521.299 105.856 517.523 117.741 517.523 133.292V236.592H482.867V59.9812H514.19Z' />
        <path d='M359.593 240.591C342.709 240.591 327.936 236.815 315.274 229.261C302.833 221.708 293.169 211.045 286.283 197.271C279.396 183.276 275.953 166.948 275.953 148.287C275.953 129.626 279.396 113.409 286.283 99.6354C293.169 85.6398 302.833 74.8654 315.274 67.3122C327.936 59.759 342.709 55.9825 359.593 55.9825C376.254 55.9825 390.916 59.759 403.579 67.3122C416.242 74.8654 426.017 85.6398 432.903 99.6354C439.79 113.409 443.233 129.626 443.233 148.287C443.233 166.948 439.79 183.276 432.903 197.271C426.017 211.045 416.242 221.708 403.579 229.261C390.916 236.815 376.254 240.591 359.593 240.591ZM359.593 210.267C374.699 210.267 386.362 204.825 394.582 193.939C403.024 183.054 407.245 167.836 407.245 148.287C407.245 128.737 403.024 113.52 394.582 102.634C386.362 91.749 374.699 86.3063 359.593 86.3063C344.264 86.3063 332.49 91.749 324.271 102.634C316.051 113.52 311.941 128.737 311.941 148.287C311.941 167.836 316.051 183.054 324.271 193.939C332.49 204.825 344.264 210.267 359.593 210.267Z' />
        <path d='M48.3182 0L118.963 195.605L189.607 0H237.925V236.592H202.603V65.6461L139.29 236.592H98.6357L35.3222 65.6461V236.592H0V0H48.3182Z' />
      </motion.svg>
    </motion.div>
  )
}
