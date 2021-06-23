class Sort {
    selectionSort(x, y) {
        let m = x.length
        let n = y.length
        let dp = {}
    
        for (let i = 0; i <= m; i++) {
            dp[i] = [];
        }
        for (let i = 0; i <= m; i++) {
            for (let j = 0; j <= n; j++) {
    
                if (i == 0 || j == 0) {
                    dp[i][j] = 0;
                }
                else if (x[i - 1] == y[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
                }
            }
        }
        return dp;
    }
}

module.exports = Sort;