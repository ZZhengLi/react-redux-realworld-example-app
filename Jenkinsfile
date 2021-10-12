pipeline {
    agent {
        docker {
          image 'node:10.11.0-alpine'
        }
    }
    environment { 
        CI = 'true'
    }
    stages{
        stage('Build') {
            steps {
                sh '/usr/bin/npm install'
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