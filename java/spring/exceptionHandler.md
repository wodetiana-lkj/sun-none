# 全局Exception处理

1. @ExceptionHandler(Class class)
2. implements HandlerExceptionResolver
3. @ControllerAdvice + @ExceptionHandler(Class class)

优劣势：

1. 每个Controller都需要单独编写管理
2. 实现了全局控制但是对于返回体要求复杂，需要重新编写返回为ModelAndView
3. 实现了全局的异常捕获，并且支持@ResponseBody