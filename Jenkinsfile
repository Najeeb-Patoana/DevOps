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

        stage('Link Vercel Project') {
            steps {
                bat 'npx vercel link --project devops --yes --token=%VERCEL_TOKEN%'
            }
        }

        stage('Deploy to Vercel') {
            steps {
                bat 'npx vercel deploy --prod --yes --token=%VERCEL_TOKEN%'
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Pipeline failed. Check logs.'
        }
    }
}