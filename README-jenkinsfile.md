
# Jenkins Project Setup - README

This repository provides detailed configurations for two Jenkins projects: FreeStyle Project and Pipeline Project. Follow the step-by-step guides below to seamlessly create, configure, and execute these projects using Jenkins. To enhance clarity, screenshots are included throughout the documentation.

## FreeStyle Project

### Overview

The FreeStyle Project is a conventional Jenkins project where you can effortlessly configure source code management, build triggers, and build steps.

### Steps

1. **Initial Jenkins Configuration:**
   - Jenkins is installed and running on your server. Refer to the [official Jenkins installation guide](https://www.jenkins.io/doc/book/installing/) if needed.

2. **Create a FreeStyle Project:**
   - Access the Jenkins dashboard and create a new project named "MyFreeStyleProject."

3. **Configure the FreeStyle Project:**
   - Set up source code management, enable SCM polling, and define build steps using shell commands.
   - Refer to the included screenshot "FreeStyle Project Configuration" for guidance.

4. **Execute the FreeStyle Project:**
   - Save the configuration and trigger a build to observe the messages for each step.
   - Check the "FreeStyle Project Build Log" screenshot to monitor the progress.

## Pipeline Project

### Overview

The Pipeline Project utilizes a Jenkinsfile to define the entire build process, providing enhanced flexibility and control.

### Steps

1. **Create a Pipeline Project:**
   - On the Jenkins dashboard, create a new project named "MyPipeline" and choose the "Pipeline" project type.

2. **Configure the Pipeline Project:**
   - Utilize a Jenkinsfile to define SCM polling and build steps using echo commands.
   - See the "Pipeline Project Configuration" screenshot for a visual guide.

3. **Execute the Pipeline Project:**
   - Save the configuration and trigger a build to observe the step-by-step progress.
   - Review the "Pipeline Project Build Log" screenshot for detailed logs.

## Trigger with SCM Changes

After completing the setup, make a code change in your repository to ensure the Pipeline is automatically triggered.

## Screenshots
- **Dashboard:**
  ![Dashboard](./jenkins-screenshots/Screenshot%20from%202024-01-06%2018-30-16.png)

- **FreeStyle Project Configuration:**
  ![FreeStyle Project Configuration](./jenkins-screenshots/Screenshot%20from%202024-01-06%2017-58-04.png)
  ![FreeStyle Project Configuration](./jenkins-screenshots/Screenshot%20from%202024-01-06%2017-58-22.png)
  ![FreeStyle Project Configuration](./jenkins-screenshots/Screenshot%20from%202024-01-06%2017-58-31.png)

  - **Pipeline Project Configuration:**
  ![Pipeline Project Configuration](./jenkins-screenshots/Screenshot%20from%202024-01-06%2018-00-04.png)
  ![Pipeline Project Configuration](./jenkins-screenshots/Screenshot%20from%202024-01-06%2018-00-16.png)
  ![Pipeline Project Configuration](./jenkins-screenshots/Screenshot%20from%202024-01-06%2017-59-38.png)

- **FreeStyle Project Build Log:**
  ![FreeStyle Project Build Log](./jenkins-screenshots/Screenshot%20from%202024-01-06%2018-00-46.png)

- **Pipeline Project Build Log:**
  ![Pipeline Project Build Log](./jenkins-screenshots/Screenshot%20from%202024-01-06%2018-00-28.png)
