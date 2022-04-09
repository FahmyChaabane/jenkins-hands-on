- Remarks on Docker in Docker volume: https://stackoverflow.com/questions/49312100/docker-in-docker-volumes-not-working-full-of-files-in-1st-level-container-em/49312179#49312179

- Step to do to configure ssh connection to ubuntu delivery server: https://stackoverflow.com/questions/53984274/ssh-from-one-container-to-another-container#:~:text=1%20bronze%20badge-,Detailed,-step%20by%20step

- HostServerDockerfile refers to the ubuntu delivery server image (has docker and openssh-server installed into it)
- JenkinsServerDockerInDockerfile refers to the jenkins server image (has docker and sshpass installed into it)
- Guide to establish git hooks for jenkins jobs: https://docs.gitlab.com/ee/administration/server_hooks.html#create-a-server-hook-for-a-single-repository

- to run the jenkins image after building it: docker run --name jenkins -d -p 8080:8080 -p 50000:50000 --net jenky -v /var/run/docker.sock:/var/run/docker.sock -v /var/jenkins_home:/var/jenkins_home myjenkins-blueocean:lts

- to run gitlab locally and configure it: docker run --detach --hostname gitlab.example.com --publish 443:443 --publish 80:80 --publish 22:22 --name gitlab --restart always --net jenky --volume $GITLAB_HOME/config:/etc/gitlab --volume $GITLAB_HOME/logs:/var/log/gitlab --volume $GITLAB_HOME/data:/var/opt/gitlab --shm-size 256m gitlab/gitlab-ee

- to run the ubuntu server and configure it: docker container run --rm --name ubuntuno --net jenky -it -d -p 22 -v /var/run/docker.sock:/var/run/docker.sock dockerized_ubuntu:lts
// https://youtu.be/GicWz2OF0sk : the -it lezma bech container ubuntu tokood running.

- exemple of gitlab hook file is : post-receive

REMARK: script shell files permissions are also commited
REMARK: jenkins and gitlab communicate thro their container names in the network.
