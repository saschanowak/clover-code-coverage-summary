# Code Coverage Summary

A GitHub Action that reads Clover format code coverage files from your test
suite and outputs a markdown summary. This summary can be posted as a Pull
Request comment or included in Release Notes by other actions to give you an
immediate insight into the health of your code without using a third-party site.
Code Coverage Summary is designed for use with any test framework that outputs
coverage in Clover XML format.
The action has a build in feature to group coverage by package. This currently
works with composer.json only.

## Inputs

### `filename`
**Required**

A path to the code coverage file to analyse. Also supports using glob patterns to match multiple files. If there are any spaces in a path or filename this value must be in quotes.


## Outputs


### Markdown Example

<table>
      <tr>
        <th colspan="8">Code Coverage
      <tr>
        <th colspan="1">Package
        <th colspan="2">Lines
        <th colspan="2">Functions
        <th colspan="2">Classes
        <th colspan="1">Health
      <tr>
  <td>unknown
  <td align="center">96%
  <td align="right">26/27
  <td align="center">83%
  <td align="right">5/6
  <td align="center">93%
  <td align="right">31/33
  <td align="center">✅
      <tr>
  <td><strong>Summary
  <td align="center"><strong>96%
  <td align="right"><strong>26/27
  <td align="center"><strong>83%
  <td align="right"><strong>5/6
  <td align="center"><strong>93%
  <td align="right"><strong>31/33
  <td align="center"><strong>✅
      </table>
<details>
          <summary>Code Coverage details</summary>
          <table>
            <tr>
              <th colspan="8">Code Coverage
            <tr>
              <th colspan="1">Class
              <th colspan="2">Lines
              <th colspan="2">Functions
              <th colspan="2">Classes
              <th colspan="1">Health
            <tr>
              <td colspan="8"><strong>unknown
              <tr>
  <td>Netlogix\Nxdummy\Exception\OptionNotFoundException
  <td align="center">NaN%
  <td align="right">0/0
  <td align="center">NaN%
  <td align="right">0/0
  <td align="center">NaN%
  <td align="right">0/0
  <td align="center">❌
<tr>
  <td>Netlogix\Nxdummy\Options\MiddlewareOptions
  <td align="center">90%
  <td align="right">10/11
  <td align="center">66%
  <td align="right">2/3
  <td align="center">85%
  <td align="right">12/14
  <td align="center">✅
<tr>
  <td>Netlogix\Nxdummy\Utility\UriUtility
  <td align="center">100%
  <td align="right">16/16
  <td align="center">100%
  <td align="right">3/3
  <td align="center">100%
  <td align="right">19/19
  <td align="center">🚀
            <tr>
  <td><strong>Summary
  <td align="center"><strong>96%
  <td align="right"><strong>26/27
  <td align="center"><strong>83%
  <td align="right"><strong>5/6
  <td align="center"><strong>93%
  <td align="right"><strong>31/33
  <td align="center"><strong>✅
          </table>
        </details>

## Usage

```yaml
name: Code Coverage Summary Report
uses: saschanowak/CloverCodeCoverageSummary@v0.1.0
with:
  filename: clover.xml
```

Add the following to your workflow to include the summary in the job summary:
```yaml
name: 'Add Code Coverage to Job Summary'
run: cat code-coverage-results-merged.md >> $GITHUB_STEP_SUMMARY
```

Add the following to your workflow to post the summary as a Pull Request comment:
```yaml
name: 'Add Code Coverage as PR Comment'
uses: marocchino/sticky-pull-request-comment@v2
if: github.event_name == 'pull_request'
with:
  recreate: true
  path: code-coverage-results-merged.md
```

## Version Numbers

Version numbers will be assigned according to the [Semantic Versioning](https://semver.org/) scheme.
This means, given a version number MAJOR.MINOR.PATCH, we will increment the:

1. MAJOR version when we make incompatible API changes
2. MINOR version when we add functionality in a backwards compatible manner
3. PATCH version when we make backwards compatible bug fixes


## Contributing

### Report Bugs

Please make sure the bug is not already reported by searching existing [issues].

If you're unable to find an existing issue addressing the problem please [open a new one][new-issue]. Be sure to include a title and clear description, as much relevant information as possible, a workflow sample and any logs demonstrating the problem.


### Suggest an Enhancement

Please [open a new issue][new-issue].


### Submit a Pull Request

Discuss your idea first, so that your changes have a good chance of being merged in.

Submit your pull request against the `main` branch.

Pull requests that include documentation and relevant updates to README.md are merged faster, because you won't have to wait for somebody else to complete your contribution.


## License

Code Coverage Summary is available under the MIT license, see the [LICENSE](LICENSE) file for more info.

[issues]: https://github.com/irongut/CodeCoverageSummary/issues
[new-issue]: https://github.com/irongut/CodeCoverageSummary/issues/new
