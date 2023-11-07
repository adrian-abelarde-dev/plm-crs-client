/** @type {import('next').NextConfig} */
const withBranchEnv = require('next-branch-env')({ expose: 'BRANCH' })
process.env.NEXTAUTH_URL = `https://${process.env.BRANCH}.${process.env.ROOT_HOST}`

const nextConfig = {}

module.exports = withBranchEnv(nextConfig)
