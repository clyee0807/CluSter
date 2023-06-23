# CluSter
CluSter 是一個用來決定聚會時間的app,適合用在小組討論、日常聚會、旅遊安排等場合。使用者可以發起event或是受邀加入朋友創建的event。我們新增了登入的功能,讓系統可以管理以前創過的 event。同時將以敲定的活動的個人行事曆同時顯示再投票頁面,讓user 在比對時間的時候不再需要一直切不同分頁或 app 來比對。


<img src="https://github.com/imhappying0807/CluSter/assets/92087210/df14628c-9f06-42e6-8ab6-c8d6eac8917b" height="800px" width="450px" />
![Screenshot_1687488770](https://github.com/imhappying0807/CluSter/assets/92087210/df14628c-9f06-42e6-8ab6-c8d6eac8917b)
![Screenshot_1687488778](https://github.com/imhappying0807/CluSter/assets/92087210/94b618b8-fbdb-4236-84c1-f7dab5533543)
![Screenshot_1687488790](https://github.com/imhappying0807/CluSter/assets/92087210/565f5fc4-d766-4cbb-81f2-cbb532df35dd)
![Screenshot_1687488793](https://github.com/imhappying0807/CluSter/assets/92087210/187d0de3-253f-4fe3-9a57-afcdefd1b159)
![Screenshot_1687488846](https://github.com/imhappying0807/CluSter/assets/92087210/eb0fa522-733b-4e09-a7b0-f7fa64386756)
![Screenshot_1687488854](https://github.com/imhappying0807/CluSter/assets/92087210/980c55c1-d1b1-4148-abfa-22df10bbf545)
![Screenshot_1687488883](https://github.com/imhappying0807/CluSter/assets/92087210/fb096656-4cbb-4a5b-8825-e574e59bce98)
![Screenshot_1687488887](https://github.com/imhappying0807/CluSter/assets/92087210/7f65b69c-ab6a-4c5c-a7dc-54bf948b46be)

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
