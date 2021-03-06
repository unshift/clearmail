const { AWS_REGION, AWS_BUCKET } = process.env

const ATTACHMENTS_TABLE = 'attachments'
const MESSAGES_TABLE = 'messages'
const USERS_TABLE = 'users'
const THREADS_TABLE = 'threads'

const SETUP_NOTIFICATION = 'AMAZON_SES_SETUP_NOTIFICATION'
const SES_VERIFICATION_SENDER = 'no-reply-aws@amazon.com'

module.exports = {
  ATTACHMENTS_TABLE,
  MESSAGES_TABLE,
  USERS_TABLE,
  THREADS_TABLE,
  SETUP_NOTIFICATION,
  SES_VERIFICATION_SENDER
}
