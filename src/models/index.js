const sequilize=require("../config/database")
const User=require("./user")

sequilize.sync()
modulet.exprots={sequilize,User}

