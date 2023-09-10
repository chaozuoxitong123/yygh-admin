<template>
  <div>
    <el-form :inline="true" :model="searchObj" class="demo-form-inline">
      <el-form-item label="医院编号">
        <el-input v-model="searchObj.hoscode" placeholder="医院编号"></el-input>
      </el-form-item>
      <el-form-item label="医院名称">
        <el-input v-model="searchObj.hosname" placeholder="医院名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getList()">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table
      :data="list"
      style="width: 100%"
      height="250">
      <el-table-column
        fixed
        prop="id"
        label="序号"
        width="100">
      </el-table-column>
      <el-table-column
        prop="hosname"
        label="医院名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="hoscode"
        label="医院编号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="apiUrl"
        label="api路径"
        width="120">
      </el-table-column>
      <el-table-column
        prop="contactsName"
        label="联系人姓名"
        width="100">
      </el-table-column>
      <el-table-column
        prop="contactsPhone"
        label="联系人手机"
        width="120">
      </el-table-column>
      <el-table-column
        label="状态"
        width="80"
      >
        <template slot-scope="scope">
          {{ scope.row.status === 1 ? '可用' : '不可用' }}
        </template>
      </el-table-column>
    </el-table>

  <!--分页-->
    <el-pagination
      :page-size="current"
      :pager-count="limit"
      layout="prev, pager, next"
      :total="total"
      @current-change="getList"
    >
    </el-pagination>
  </div>
</template>

<script>
//引入接口定义的js文件
import hospset from "@/api/hospset";

export default {
  data(){
    return{
      current:1,//当前页
      limit:3,//每页显示的记录数
      searchObj:{},//条件封装对象
      list:[],//每页数据集合
      total: 0
    }
  },
  created() {//页面渲染前调用方法获得数据
    //一般来说调用methods定义的方法，得到数据
    this.getList()
  },
  methods: {//定义方法，进行请求接口调用
    //医院设置列表
    getList(page = 1) {
      this.current = page
      hospset.getHospSetList(this.current,this.limit,this.searchObj)
        .then(response =>{//请求成功进入这个方法
          //返回集合赋值list
          this.list = response.data.records
          this.total = response.data.total
          console.log(response)
        })
        .catch(error =>{//请求失败进入这个方法
          console.log(error)
        })
    }

  }
}
</script>

<style scoped>

</style>
