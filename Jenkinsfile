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
                sh 'apt update'
                sh 'apt install nodejs npm'
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