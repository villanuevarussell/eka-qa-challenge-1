# EKA QA CHALLENGE

## Introduction
The objective of this challenge from the company perspective, is to get a good grasp of the technical ability of a candidate. To do so, we would like you to build a complementing suite of tests using Nightwatch.js so that you can put us on full blast for our company website, which can be found at www.go-eka.com.

Your objective, as a candidate, will be to develop a test suite to cover features that you can find within our site.

## Directions
As mentioned in the introduction, we would like you to develop a test suite that complements the workflow that we've described below.

To start with, we've put together the config necessary for you to start writing your tests. To set up, follow these instructions:

1. Clone the repository (https://github.com/go-eka/eka-qa-challenge-1.git)
2. Install packages using `npm i`
3. Run `node nightwatch.conf.js`
4. Verify things are running okay by running `npm test`
5. One test should run, and it should pass

**IMPORTANT**
If the above instructions are completely alien to you and you have no idea where to start, OR if for whatever reason you can't get the stuff to run on your computer, then you have two options:

Option 1: Don't spend time trying to figure out how to get the stuff working on your machine. Instead of writing tests, you will write out a step-by-step list of simple steps you would take to test a certain feature/workflow. In practice, this is called pseudocoding.

Option 2: Put your big boy pants on and figure it out. I'll help you out a little though. See the help section for environment setup.

If you get stuck on any of the instructions above, e-mail us and we will do our best to help you get through it if reasonable.

If you are not familiar with Nightwatch.js, you will have to go through their docs and figure out how to put together tests on your own. This may seem harsh, but we need to know that you can be a trailblazer when the need arises.

Once you develop your tests (more details on what kinds of tests to write are given in the workflow section) and write your code in this project, create a Github repository for your work and push your work to the remote repo. Then, e-mail us back in the thread in which you received this challenge with the url to your Github repo.

There are a few requirements that we will impose on the tests that you write -- the most important being that you compose them using **Nightwatch.js**. Also, your tests should cover the workflow described below.

## Workflow
The basic workflow is as such:

1. User goes to www.go-eka.com (This part has already been done for you)
2. The EKA logo should be visible (This part has already been done for you)
3. The NavBar elements should be visible (Solutions, Services, Company, Contact Us, etc.)
4. Clicking on the 'Contact Us' button in the NavBar should bring up a modal with the text 'How can we help?'
5. When a user enters their email in the #join-mailinglist_input input element and clicks on the #join-mailinglist_btn, it should bring up a modal with the text 'Request a demo'

This is the basic workflow that we would like you to cover at a minimum. We would also like you to write additional tests (if you have time) so we can get a glimpse into how you approach testing as a whole. If you have time, I would **highly** suggest investing effort into this part of the challenge because this part of the challenge is where we typically see a lot of variation between candidates (therefore making it a good chance to set your work apart from others').


## Questions?
Treat this as if you just got a steaming pile of code from your favorite developer, and you're writing tests to cover their back. As in a normal work environment, if you have questions about some features of the application you should speak up and ask for clarification.

Questions should be sent out via the e-mail thread that you received this challenge. Don't forget to reply to all.


## Help
This section is not relevant unless you're having issues setting up your environment.

* You need to have node installed on your machine. Our preferred method of installing node is through [nvm](https://github.com/creationix/nvm).
  * Follow the 'install & update script' section on the linked page
  * If you're on Windows, godspeed to you. Try to see if you can find a .exe to install node version 8.1.4 on the node website instead of using nvm

* You need to have the right version of node installed on your machine.
  * Using nvm, run `nvm install 8.1.4`. Pro Tip: If you just type in `nvm` in your terminal it'll list out all the commands available.

* You need to have the right version of npm installed on your machine.
  * In your terminal, run `npm i -g npm@6.5.0`

* If you're not familiar with git, it is a requirement within our company that you be able to work with git. Sure, we could give you the little snippets that you need to get going but you're going to have to learn it sooner or later. If not with us, then with someone else. That being said, if you need to then just download the repo as a zip and then when you're done delete the `node_modules` folder and send it back to us.
