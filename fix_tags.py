
import os
for i in range(1, 7):
    path = f'c:/Project/Angular/ccas_new/src/app/main/compressor{i}/compressor{i}.component.html'
    try:
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
    except: continue
    
    # Remove all trailing </div> and </ng-container>
    content = content.replace('</ng-container>', '')
    
    # We will just find the last </table>\n  </div>
    # And then append the correct closing tags.
    # Wait, it's safer to just split by '</table>' and do it on the last one.
    
    parts = content.split('</table>')
    if len(parts) > 1:
        # The text after the last </table> should be exactly what we need.
        # It's currently \n  </div>\n</div>\n...
        # We replace it completely with \n  </div>\n</div>\n</div>\n</ng-container>\n
        parts[-1] = '\n  </div>\n</div>\n</div>\n</ng-container>\n'
        new_content = '</table>'.join(parts)
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
print('Done')

