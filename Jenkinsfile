pipeline {
    agent { 
        docker { 
            image  'ubuntu'          
        }
    }
    environment { 
        CI = 'true'
    }
    stages{
        stage('Build') {
            steps {
                sh 'curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -'
                sh 'sudo apt install nodejs'
                sh 'npm install'
            }
        }

        stage('Deploy') {
            when {
              expression {
                currentBuild.result == null || currentBuild.result == 'SUCCESS' 
              }
            }
            steps {
                sh 'npm start'
            }
        }
    }
}