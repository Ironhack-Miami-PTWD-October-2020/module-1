<!-- ![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)
-->

# General guidelines for labs/assignments

In this document, you will find all the steps you should follow when working on the labs (in the prework and during the bootcamp).

## Step 1: Fork the repository

The majority of time, you will have to start the process with forking. Just a quick reminder on what is the process of forking.

:::info
Creating a “fork” is producing a personal copy of someone else’s project. Forks act as a sort of bridge between the original repository and your personal copy.
:::
If you forked someone's project, you will be able to push your code (this is called _making pull request_, and we will be talking about it soon) so the owner of the original project can check it and if they find it useful, use it.

**During your Ironhack journey, you have to fork each lab to be able to submit it. This way, your TAs, and instructors will be able to check your work and give you feedback.**

### How to fork?

<small>All the examples will be related to your Ironhack journey, and they will point to the [`ironhack-labs`](https://github.com/ironhack-labs) GitHub organization. </small>

Navigate to the repository you want to fork. Let's take an example of the prework [HTML exercise](https://github.com/ironhack-labs/lab-html-exercise).

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_926952599ca89301b826696c209fd338.png)

After clicking on the fork button, you will be presented with the loading screen that will most likely look like this:

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_10963380e2cfbaab068f92027378ebed.png)

After the forking is done successfully, you will be redirected to the **copied repository on your GitHub account**.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_ab52ba11af58807f2b0ce6bc33eddcd4.png)

We are done here with the forking process.

## Step 2: Clone the repository

Now, on your GitHub account, you have access to the copied repository. This will be repository you will copy (clone) to your local machine, and that will be your working area.

### How to clone repository?

1. Click on the green ‘Clone or download’ button and copy the link by selecting and copying or by using the clipboard button.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_d60e750aafbfe7838bbdbf28619561c4.png)

2. Open your terminal and navigate to the location where you want to store the local version of your repository.
3. When you navigated to the correct folder in your terminal run the following command:

```shell
$ git clone <paste url from the clipboard>
```

Check the image below if you have any doubts:

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_84541b74195c3a6bb9cde5ff753e3118.png)

4. Once the cloning process is done, you see the following information in your terminal. And you can check that repository was successfully cloned from GitHub to your local machine by running `ls` command in your terminal:

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_ab79b2e53c91a60727bcb4722a251df3.png)

The cloning process is finished with this step. Now you can use the code to make changes before we proceed to the next step, which is pushing the changes to the forked repository on your GitHub.

### Using cloned repository locally

Before you open the project, you have to navigate into the cloned folder because that’s where `git` is initialized:

```shell
$ cd <name of cloned folder >
```

To open the project in VS Code, you have to run the following command when you already navigated to the folder:

```shell
$ code .
```

If in doubt, check the following image:

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_abb34eb9484260ac24726a7c6ff29b88.png)

Now we are ready to start working/making changes. Quickly go to the terminal and, while in the copied repository, run the following command:

```shell
$ git status
```

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_1b15541cf9a6df25582e47584ad84cef.png)

This shows us that there were no changes made locally, yet.

## Step 3: Add, commit and push the changes

After you made changes to your project, you can check which files you changed by running again:

```shell
$ git status
```

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_5813099ab6bff940f70b5449ccb15c19.png)

### How to add changes?

Currently, we demoed making changes to a single file. You might be making changes to one or multiple files; thus, you might see many files marked as _modified_.

In case you want to add just one file and you are not ready to add the others, you can do so with the following command:

```shell
$ git add <name of the file>
```

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_af98ae73d69b521b9e4caaa55341e10a.png)

However, most likely, you would like to add all the changes so that you will use the following command more often:

```shell
$ git add .
```

<small> :+1: The dot represents all files in the current repository.</small>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_140e62e6beddcf8a2af5c1f16af0868c.png)

### How to commit changes?

After all changed files are added, you should commit your files and add a commit message describing the things you have changed, with the following command:

```shell
$ git commit -m “<your message>”
```

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_0ef0ad72a3dbf04e13f526316d45a606.png)

### How to push changes?

After committing your changes, you can push the commits from your local machine to your remote repository on GitHub with the following command:

```shell
$ git push origin master
```

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_85546a18406a582e059fe7dd08d388f8.png)

Perfect! The changes we made are now available in the remote repository on our GitHub profile.

Now, let's go to the GitHub and learn how to make the pull request.

## Step 4: Create a pull request

After pushing your changes from your local master to the remote master, your commit should be visible on GitHub (the changes you made locally are now available in GitHub repository as well).

When your commit is successfully pushed to GitHub, you can create a pull request by clicking on the "New pull request" button.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_4da38401d30beacf8a0f1564ff0b422c.png)

After clicking on that button, you will be forwarded to the following page:

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_63b74775dbb75f3b0ec07aed6ec6b082.png)

As you can see in the image above, when you initialize the process for creating the pull request, you will be redirected to the original repository (where you were at the very beginning when you started the process of forking).

The final step is just to fill out the pull request title and the body.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_7fd8a357bf140a3d3373e8d35b80aa59.png)

By pressing the green “Create pull request” button, you will create the pull request to the original lab repository.

### The final

If you would click on the "Pull requests", you will see your own pull request:

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_96c6e545d2732b3aff9141191feea59a.png)

<br><br>

**That would be it. Happy coding! :heart:**
