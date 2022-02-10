module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:vue/essential', 'airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    /**
     * "off" 或 0 - 关闭规则
     * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
     * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
     */
    // eslint 规则
    'no-console': 'off',
    'no-debugger': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    'vue/no-multiple-template-root': 'off',
    'symbol-description': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-unused-vars': [0, { vars: 'local', args: 'none', varsIgnorePattern: '[iI]gnored' }],
    // 不允许变量在定义块的外部使用
    'block-scoped-var': 'error',
    // 默认缩进2，忽略模板字符串
    indent: ['error', 2, { SwitchCase: 1, ignoredNodes: ['TemplateLiteral'] }],
    // 默认使用单引号
    quotes: [1, 'single'],
    'no-empty': 'off',
    // "semi": ["error", "always", { "omitLastInOneLineBlock": true}],
    // 双峰驼命名格式
    camelcase: [
      1,
      {
        properties: 'always'
      }
    ],
    // prettier 规则 npx prettier --write . 纠正所有文件的格式 .匹配所有文件
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        tabWidth: 2,
        endOfLine: 'auto',
        semi: false,
        trailingComma: 'none'
      }
    ],
    // 嵌套深度
    'max-depth': ['error', 6],
    // const定义不允许修改
    'no-const-assign': 'warn',
    // 循环中不能使用await
    'no-await-in-loop': 'error',
    // 未声明变量直接引用
    'no-undef': 'error'
  }
}
