pipeline {
    agent any

    environment {
        VERCEL_TOKEN = credentials('vercel_token')
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'not test'
            }
        }

        stage('Build (optional)') {
            steps {
                echo 'not test'
            }
        }

        stage('Deploy to Vercel') {
            steps {
                bat 'npx vercel --prod --yes --token=%VERCEL_TOKEN% --name devops'
            }
        }
    }

    post {
        success {
            echo ' Deployment successful!'
        }
        failure {
            echo 'Pipeline failed. Check logs.'
        }
    }
}
