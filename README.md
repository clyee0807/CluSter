# CluSter
CluSter以when2meet為靈感發想，是一個用來決定聚會時間的app,適合用在小組討論、日常聚會、旅遊安排等場合。使用者可以發起event或是受邀加入朋友創建的event。我們新增了登入的功能,讓系統可以管理以前創過的 event。同時將以敲定的活動的個人行事曆同時顯示再投票頁面,讓user 在比對時間的時候不再需要一直切不同分頁或 app 來比對。



## Features
* 首頁可以查看過去曾加入/創建的event
* 有create/join兩大功能
<img src="https://github.com/imhappying0807/CluSter/assets/92087210/37362ccf-319c-41d7-ba3e-0a765305e9df" height="800px" width="450px" />
<img src="https://github.com/imhappying0807/CluSter/assets/92087210/d27267e9-998d-4713-ae24-73b93eaab8c7" height="800px" width="450px" />


* 創立event可以有Specific Dates/Days of the Week來讓members投票
<img src="https://github.com/imhappying0807/CluSter/assets/92087210/4af9318d-fa32-44d4-acab-399d38166edd" height="800px" width="450px"/>
<img src="https://github.com/imhappying0807/CluSter/assets/92087210/d722ca96-9575-43db-8778-2018ec28b654" height="800px" width="450px" />

* 投票者頁面，送出投票後可以看到當前投票結果以及當下前三高票，並可以隨時返回修改
<img src="https://github.com/imhappying0807/CluSter/assets/92087210/1e81b485-fb39-4928-b8ad-301a9f6a7ae5" height="800px" width="450px" />
<img src="https://github.com/imhappying0807/CluSter/assets/92087210/a3d8dea2-e209-4b04-999c-5f7e91e6a95a" height="800px" width="450px" />

* 個人介面，新增好友功能，可以再創件event時快速加入members
<img src="https://github.com/imhappying0807/CluSter/assets/92087210/80fed4a7-87d2-4b76-ab77-fe37a4d1d363" height="800px" width="450px" />
<img src="https://github.com/imhappying0807/CluSter/assets/92087210/0e419611-ba50-4b78-a5a4-80e06048e6aa" height="800px" width="450px" />
<hr/>
<details><summary>git小抄</summary>

  ## Brief
每個人在撰寫一個新的 feature 時（例如投票）
應該要以 master 為 base branch 拉出另一個 branch
名稱我們假設是 feat/voting 的 branch
當他在 feat/voting 這個 branch 寫完功能後
再 merge 回 master branch
如果遇到 conflict 就要先 resolve 再 merge 進去

### step.0
* ```git clone ...```
* ```npm install```
* ```npm start```
* ```a``` 打開虛擬機
* ```r``` 重整
### step.1
***要先開branch切到那個branch再寫code***<br>
***要先開branch切到那個branch再寫code***<br>
***要先開branch切到那個branch再寫code***
1. 根據master複製一個new branch
```git branch <new_branch> <master>```
2. 切換到你創的那個new branch
```git checkout <branch_name>```
### step.2
1. 寫你的扣
2. push到你創的branch(不要推錯)
```git add .```
```git commit -m 'description'```
```git push -u <new_branch>```
### step.3
1. 合併到master
在github上面按pull request->ok

## 如果你要在本地merge別的分支的code
### step.1
先commit自己的code
```git commit -m 'description'```
```git push -u <new_branch>```
### step.2
再切換到你想要抓的branch，並拉下來
```git checkout <target_branch_name>```
```git pull```
### step.3
切回你原本的branch，並merge
```git checkout <your_branch_name>```
```git merge <target_branch_name>```
### step.4
讀conflict message，手動解決conflict
merge完成


### 其他指令
* ```git branch -a``` 看現在有哪些branch
* ```git status``` 看現在有trace哪些file

### Notice
寫功能時記得不要改多個資料夾如果有兩個人同時改動同個資料夾會造成conflict，要手動修正會很麻煩
然後遇到奇怪問題不要隨便覆蓋之類的
</details>
